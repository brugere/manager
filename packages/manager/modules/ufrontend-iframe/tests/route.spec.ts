import Route from '../src/route';

describe('Route', () => {
  it('getRootPath', () => {
    expect(new Route(null).getRootPath()).toBe('/');
    expect(new Route('/').getRootPath()).toBe('/');
    expect(new Route('/foo').getRootPath()).toBe('/foo');
    expect(new Route('/foo/bar').getRootPath()).toBe('/foo');
  });

  it('getSubPath', () => {
    expect(new Route(null).getSubPath()).toBe('/');
    expect(new Route('/').getSubPath()).toBe('/');
    expect(new Route('/foo').getSubPath()).toBe('/');
    expect(new Route('/foo/bar').getSubPath()).toBe('/bar');
    expect(new Route('/foo/bar/baz').getSubPath()).toBe('/bar/baz');
    expect(new Route('/foo/bar/baz/').getSubPath()).toBe('/bar/baz');
  });

  it('prepend', () => {
    expect(new Route(null).prepend('foo')).toBe('/foo');
    expect(new Route('/').prepend('bar')).toBe('/bar');
    expect(new Route('/a').prepend(null)).toBe('/a');
    expect(new Route('/').prepend('/bar')).toBe('/bar');
    expect(new Route('/foo').prepend('bar')).toBe('/bar/foo');
    expect(new Route('/foo/').prepend('/bar')).toBe('/bar/foo');
    expect(new Route('/bar').prepend('a/b')).toBe('/a/b/bar');
  });
});
