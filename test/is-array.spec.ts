import { isArray } from "../src";

describe("isArray", () => {
  it("should return true for array arg", () => {
    expect(isArray([])).toBeTruthy();
  });

  it("should return false for string arg", () => {
    expect(isArray("ab")).toBeFalsy();
  });
  it("should return false for number arg", () => {
    expect(isArray(42)).toBeFalsy();
  });
  it("should return false for object arg", () => {
    expect(isArray({})).toBeFalsy();
  });
  it("should return false for boolean arg", () => {
    expect(isArray(true)).toBeFalsy();
    expect(isArray(false)).toBeFalsy();
  });
  it("should return false when arg is null", () => {
    expect(isArray(null)).toBeFalsy();
  });
  it("should return false when arg is undefined", () => {
    expect(isArray(undefined)).toBeFalsy();
  });
});
