const sortAsc = (arr: number[]): number[] => {
  const copy = [...arr];
  return copy.sort((a, b) => a - b);
};

const sortDes = (arr: number[]): number[] => {
  const copy = [...arr];
  return copy.sort((a, b) => b - a);
};

const minSum = (arr: number[]): number => {
  return sortAsc(arr)
    .slice(0, 4)
    .reduce((acc, next) => acc + next, 0);
};

const maxSum = (arr: number[]): number => {
  return sortDes(arr)
    .slice(0, 4)
    .reduce((acc, next) => acc + next, 0);
};

const toPrint = (arr: number[]): string => {
  return `${minSum(arr)} ${maxSum(arr)}`;
};

const miniMaxSum = (arr: number[]): void => {
  console.log(toPrint(arr));
};

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(toPrint([4, 3, 2, 1, 9, 8, 7, 6])).toBe("10 30");
    expect(sortAsc([4, 1, 4, 6])).toEqual([1, 4, 4, 6]);
    expect(sortDes([4, 1, 4, 6])).toEqual([6, 4, 4, 1]);
    expect(minSum([0, 0, 1, 2, 2, 3, 4, 5])).toBe(3);
    expect(maxSum([0, 0, 1, 2, 2, 3, 4, 5])).toBe(14);
  });
}
