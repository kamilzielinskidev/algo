type Vector = number[];

const getOccurances = (
  arr: Vector
): { positives: number; zeroes: number; negatives: number } => {
  const value = { positives: 0, zeroes: 0, negatives: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) value.positives += 1;
    if (arr[i] === 0) value.zeroes += 1;
    if (arr[i] < 0) value.negatives += 1;
  }
  return value;
};

const calcProportion = (occurances: number, all: number): number => {
  return parseFloat((occurances / all).toFixed(6));
};

const plusMinus = (arr: number[]): void => {
  const { positives, zeroes, negatives } = getOccurances(arr);
  const arrLen = arr.length;
  console.log(calcProportion(positives, arrLen));
  console.log(calcProportion(negatives, arrLen));
  console.log(calcProportion(zeroes, arrLen));
};

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(getOccurances([-1, 0, 0, 0, -7, 8, 1])).toEqual({
      positives: 2,
      zeroes: 3,
      negatives: 2,
    });
  });
  it("", () => {
    expect(calcProportion(1, 6)).toBe(0.166667);
  });
}
