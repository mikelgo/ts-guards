import { isNumber } from "../src";

describe('isNumber', () => {
  it("should return true for number arg", () => {
    expect(isNumber(42)).toBeTruthy();
  });

  it("should return false for string arg", () => {
    expect(isNumber("abc")).toBeFalsy();
  });
  it("should return false for boolean arg", () => {
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(false)).toBeFalsy();
  });
  it("should return false for object arg", () => {
    expect(isNumber({})).toBeFalsy();
  });
  it("should return false for array arg", () => {
    expect(isNumber([])).toBeFalsy();
  });
  it("should return false when arg is null", () => {
    expect(isNumber(null)).toBeFalsy();
  });
  it("should return false when arg is undefined", () => {
    expect(isNumber(undefined)).toBeFalsy();
  });
})
