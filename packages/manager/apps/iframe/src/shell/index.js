console.log('shell started');
window.updateHash = () => {
  const iframe = document.querySelector('iframe');
  console.log(iframe);
  iframe.contentWindow.location.replace('app/#/');
};

const iframe = document.querySelector('iframe');
console.log(iframe);
iframe.contentWindow.location.replace('app/#/');
console.log(iframe.contentWindow.location.href);
