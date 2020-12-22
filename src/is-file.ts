/**
 * Verifies if an argument is an instance of {@link File}
 *
 * @example
 * var file = new File([], 'filename');
 * if (isFile(file)) { // do something}
 *
 * @param arg - the argument to check
 * @return
 */
export function isFile(arg: any): arg is File {
  return arg instanceof File;
}
