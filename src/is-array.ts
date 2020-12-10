/**
 * Verifies if an argument is of type array.
 *
 * @param arg - the argument to check
 * @return
 */
export function isArray<T>(arg: any): arg is Array<T> {
  return typeof arg === "object" && Array.isArray(arg);
}
