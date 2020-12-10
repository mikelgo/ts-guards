import { isString } from "../src";

describe("isString", () => {
  it("should return true for string arg", () => {
    expect(isString("abc")).toBeTruthy();
  });

  it("should return false for boolean arg", () => {
    expect(isString(true)).toBeFalsy();
    expect(isString(false)).toBeFalsy();
  });
  it("should return false for number arg", () => {
    expect(isString(42)).toBeFalsy();
  });
  it("should return false for object arg", () => {
    expect(isString({})).toBeFalsy();
  });
  it("should return false for array arg", () => {
    expect(isString([])).toBeFalsy();
  });
  it("should return false when arg is null", () => {
    expect(isString(null)).toBeFalsy();
  });
  it("should return false when arg is undefined", () => {
    expect(isString(undefined)).toBeFalsy();
  });
});
