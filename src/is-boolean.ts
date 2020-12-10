/**
 * Verifies if an argument is of type boolean
 * @param arg - the argument to check
 * @return
 */
export function isBoolean(arg: any): arg is boolean {
  return typeof arg === "boolean";
}
