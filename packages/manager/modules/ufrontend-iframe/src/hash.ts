/** @internal */
const hashExplode = (hash: string): { hashType: string; path: string } => {
  const [, hashType, path] = hash.match(/^(#!?)(.*)$/) || [null, '', ''];
  return { hashType, path };
};

class Hash {
  /**
   * @param hash Hash for which the prefix will be added.
   * @param prefix Prefix to prepend to the hash.
   * @returns New hash with prefix added at the front of the path.
   */
  static pathPrepend(hash: string, prefix: string): string {
    if (!hash || !prefix) return hash;
    const { hashType, path } = hashExplode(hash);
    if (hashType !== '#' && hashType !== '#!') return undefined;
    const leadingSlash = path.startsWith('/');
    return `${hashType}${leadingSlash ? '/' : ''}${encodeURIComponent(prefix)}${
      leadingSlash ? '' : '/'
    }${path}`;
  }

  /**
   * @returns New hash with path prefix removed.
   */
  static pathShift(hash: string): string {
    if (!hash) return hash;
    const { hashType, path } = hashExplode(hash);
    if (path.startsWith('/'))
      return `${hashType}${path.replace(/\/[^/]+/, '')}`;
    return `${hashType}${path.replace(/[^/]+\//, '')}`;
  }

  /**
   * @returns Root path of a given hash.
   */
  static getRootPath(hash: string): string {
    if (!hash) return hash;
    const { hashType, path } = hashExplode(hash);
    return (path.match(/(\/?[^/]*)/) || [null, '/'])[1];
  }

  /**
   * @returns True if both hash describe the same path, false otherwise.
   */
  static pathIsEqual(hash: string, otherHash: string): boolean {
    const { path } = hashExplode(hash);
    const { path: otherPath } = hashExplode(otherHash);
    return path.replace(/^\//, '') === otherPath.replace(/^\//, '');
  }
}

export default Hash;
