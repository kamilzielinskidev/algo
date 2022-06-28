const filterOutMatches =
  (divider: number) =>
  (values: number[]) =>
  (arr: number[]): number[] => {
    return arr.filter(
      (v) => !values.some((value) => (v + value) % divider === 0)
    );
  };

const remove = (index: number) => (arr: number[]) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const getAvailablePermutations = (
  divider: number,
  arr: number[],
  path = [] as number[]
): number[][] => {
  if (arr.length === 0) {
    return [path];
  }

  return arr
    .map((v, i) => {
      const newArr = filterOutMatches(divider)([...path, v])(remove(i)(arr));
      return getAvailablePermutations(divider, newArr, [...path, v]);
    })
    .flat();
};

const getLongestArrayLen = (arr: number[][]) => {
  return arr.reduce((acc, next) => {
    return next.length > acc ? next.length : acc;
  }, 0);
};

it("", () => {
  expect(filterOutMatches(4)([1, 2])([1, 8, 0, 3, 2])).toEqual([1, 8, 0]);
  expect(remove(2)([1, 2, 3, 4])).toEqual([1, 2, 4]);
  expect(remove(0)([1, 2, 3, 4])).toEqual([2, 3, 4]);
  expect(remove(3)([1, 2, 3, 4])).toEqual([1, 2, 3]);
  expect(getAvailablePermutations(3, [1, 7, 2, 4])).toEqual([
    [1, 7, 4],
    [1, 4, 7],
    [7, 1, 4],
    [7, 4, 1],
    [2],
    [4, 1, 7],
    [4, 7, 1],
  ]);
  expect(getLongestArrayLen([[3, 5], [1, 2, 4], [9]])).toBe(3);
  expect(
    getLongestArrayLen(
      getAvailablePermutations(4, [19, 10, 12, 10, 24, 25, 22])
    )
  ).toBe(3);
});
