import { isObject } from "../src";

describe("isObject", () => {
  it("should return true for object arg", () => {
    expect(isObject({})).toBeTruthy();
  });

  it("should return false for string arg", () => {
    expect(isObject("ab")).toBeFalsy();
  });
  it("should return false for number arg", () => {
    expect(isObject(42)).toBeFalsy();
  });
  it("should return false for boolean arg", () => {
    expect(isObject(true)).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
  });
  it("should return false for array arg", () => {
    expect(isObject([])).toBeFalsy();
  });
  it("should return false when arg is null", () => {
    expect(isObject(null)).toBeFalsy();
  });
  it("should return false when arg is undefined", () => {
    expect(isObject(undefined)).toBeFalsy();
  });
});
