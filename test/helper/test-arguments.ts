export enum ArgumentTypes {
  string,
  number,
  boolean,
  array,
  object,
  null,
  undefined,
  file
}

const TEST_ARGUMENTS = new Map<ArgumentTypes, any>([
  [ArgumentTypes.string, "abc"],
  [ArgumentTypes.number, 42],
  [ArgumentTypes.boolean, true],
  [ArgumentTypes.array, []],
  [ArgumentTypes.object, {}],
  [ArgumentTypes.null, null],
  [ArgumentTypes.undefined, undefined],
  [ArgumentTypes.file, new File([], 'file')]
]);

export function getTestArgument(type: ArgumentTypes): any {
  return TEST_ARGUMENTS.get(type);
}

export function getAllTestArgumentsExcept(exceptionalType: ArgumentTypes): Map<ArgumentTypes, any> {
  const copy = new Map<ArgumentTypes, any>(TEST_ARGUMENTS);
  copy.delete(exceptionalType);
  return copy;
}
