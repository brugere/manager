const { spawn } = require('child_process');
const express = require('express');
const httpProxy = require('http-proxy');

const shell = spawn('yarn', ['shell']);
shell.stdout.on('data', (data) => console.log('SHELL>', data.toString()));
shell.stderr.on('data', (data) => console.log('SHELL>', data.toString()));
shell.on('exit', () => console.log('SHELL> terminated'));

const [appName] = process.argv.slice(2);

const app = spawn('lerna', ['exec', '--stream', `--scope='${appName}'`, '--', 'webpack-dev-server --port=9002 --output-public-path=/app/']);
app.stdout.on('data', (data) => console.log('APP>', data.toString()));
app.stderr.on('data', (data) => console.log('APP>', data.toString()));
app.on('exit', () => console.log('APP> terminated'));

const proxy = httpProxy.createProxyServer();
const server = express();

server.all('/app/*', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9002' });
});

server.all('/app', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9002' });
});

server.all('/*', function(req, res) {
  proxy.web(req, res, { target: 'http://localhost:9001' });
});

const serverProcess = server.listen(9000);

function cleanUp() {
  shell.kill();
  app.kill();
  serverProcess.close();
}
process.on('cleanup', cleanUp);
process.on('exit', cleanUp);
process.on('SIGINT', cleanUp);
