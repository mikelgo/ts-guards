/**
 * Verifies if an argument is of type number
 * @param arg - the argument to check
 * @return
 */
export function isNumber(arg: any): arg is number {
  return typeof arg === "number";
}
