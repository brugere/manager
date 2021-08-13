class ShellApplication {
  currentWindow: Window;
  childWindow: Window;
  parentWindow: Window;

  constructor(iframe: HTMLIFrameElement) {
    this.currentWindow = window;
    this.childWindow = iframe.contentWindow;
    this.parentWindow = window.parent;
  }

  isTopLevel(): boolean {
    return this.parentWindow === this.currentWindow;
  }

  init(): void {
    window.addEventListener(
      'message',
      ({ data }) => {
        if (data.id !== 'ovh-ufrontend') return;
        if (data.type === 'hash-update') {
          if (this.isTopLevel()) {
            this.updateLocation(data.hash);
          } else {
            this.notifyParent('ok');
          }
        } else if (data.type === 'navigate') {
          this.notifyChild('update-url');
        }
      },
      true,
    );
  }

  updateLocation(url: string) {
    this.currentWindow.location.replace(url);
  }

  notifyParent(data): void {
    if (this.parentWindow !== window.self)
      this.parentWindow.postMessage(data, '*');
  }

  notifyChild(data): void {
    this.childWindow.postMessage(data, '*');
  }
}

function bootstrap({ applicationId }): void {
  console.log('bootstrap', applicationId);

  window.addEventListener('message', (message) => {
    console.log(applicationId, 'receives', message.data);
    console.log(message);
  });

  if (window.parent !== window.self) {
    window.parent.postMessage(
      {
        id: 'foo',
      },
      'http://localhost:8000',
    );
  }
}

export default bootstrap;
