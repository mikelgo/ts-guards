import { isFile } from "../src";
import {
  ArgumentTypes,
  getAllTestArgumentsExcept,
  getTestArgument
} from "./helper/test-arguments";

describe("isFile", () => {
  it("should return true for a arg of a File instance", () => {
    expect(isFile(getTestArgument(ArgumentTypes.file))).toBeTruthy();
  });
  it("should return false for all other data types", () => {
    getAllTestArgumentsExcept(ArgumentTypes.file).forEach((arg) => {
      expect(isFile(arg)).toBeFalsy();
    });
  });
});
