/**
 * Verifies if an argument is of type string
 * @param arg - the argument to check
 * @return
 */
export function isString(arg: any): arg is string {
  return typeof arg === "string";
}
