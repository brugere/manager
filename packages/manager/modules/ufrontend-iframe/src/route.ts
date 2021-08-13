function trimSlashes(path: string, start = true, end = true): string {
  let result = path;
  if (start) result = result.replace(/^\/+/g, '');
  if (end) result = result.replace(/\/+$/g, '');
  return result;
}

class Route {
  path: string;

  constructor(path: string) {
    this.path = path || '/';
  }

  getPath(): string {
    return (
      trimSlashes(
        this.path.startsWith('/') ? this.path : `/${this.path}`,
        false,
      ) || '/'
    );
  }

  getRootPath(): string {
    return (this.path.match(/\/[^/]*/) || [])[0];
  }

  getSubPath(): string {
    if (this.path === '/') return '/';
    return trimSlashes(this.path.replace(/\/[^/]*/, ''), false) || '/';
  }

  prepend(prefix: string): string {
    if (!prefix) return this.path;
    return trimSlashes(
      `/${trimSlashes(prefix)}/${trimSlashes(this.path)}`,
      false,
    );
  }
}

export default Route;
