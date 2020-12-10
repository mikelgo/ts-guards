import { isBoolean } from "../src";

describe("isBoolean", () => {
  test("should return true for boolean arg", () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
  });

  test("should return false for string arg", () => {
    expect(isBoolean("abc")).toBeFalsy();
  });
  test("should return false for number arg", () => {
    expect(isBoolean(42)).toBeFalsy();
  });
  test("should return false for object arg", () => {
    expect(isBoolean({})).toBeFalsy();
  });
  test("should return false for array arg", () => {
    expect(isBoolean([])).toBeFalsy();
  });
  test("should return false when arg is null", () => {
    expect(isBoolean(null)).toBeFalsy();
  });
  test("should return false when arg is undefined", () => {
    expect(isBoolean(undefined)).toBeFalsy();
  });
});
