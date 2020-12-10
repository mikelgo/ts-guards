/**
 * Verifies if an argument is of type object.
 *
 * In contrast to the oficial JavaScript spec this type guard will really
 * only return true for an object and not for an array (which is an object from perspective
 * of JavaScript).
 *
 * @param arg - the argument to check
 * @return
 */
export function isObject(arg: any): arg is object {
  return typeof arg === "object" && !Array.isArray(arg);
}
