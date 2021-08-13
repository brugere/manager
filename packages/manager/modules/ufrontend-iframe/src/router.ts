import Route from './route';

class Router {
  static getRoute(): Route {
    const { hash } = window.location;
    const path = hash.replace(/^#!?/, '');
    return new Route(path);
  }
}

export default Router;
