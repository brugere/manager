import Router from '../src/router';

let windowSpy;

beforeEach(() => {
  windowSpy = jest.spyOn(window, 'window', 'get');
});

afterEach(() => {
  windowSpy.mockRestore();
});

function mockHash(hash: string) {
  windowSpy.mockImplementation(() => ({
    location: {
      hash,
    }
  }));
}

describe('Router', () => {
  it('getRoute', () => {
    mockHash('#/foo/bar');
    expect(Router.getRoute().getPath()).toBe('/foo/bar');
    mockHash('#!/foo/bar');
    expect(Router.getRoute().getPath()).toBe('/foo/bar');
    mockHash('#foo/bar');
    expect(Router.getRoute().getPath()).toBe('/foo/bar');
    mockHash('#/foo/bar/baz/');
    expect(Router.getRoute().getPath()).toBe('/foo/bar/baz');
    mockHash('#/');
    expect(Router.getRoute().getPath()).toBe('/');
    mockHash('#');
    expect(Router.getRoute().getPath()).toBe('/');
    mockHash('');
    expect(Router.getRoute().getPath()).toBe('/');
  });
});
