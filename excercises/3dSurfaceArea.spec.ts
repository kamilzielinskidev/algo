const adjustArea = (A: number[][]): number[][] => {
  const empty = new Array(A[0].length + 1 + 1).fill(0);

  return [empty, ...A.map((row) => [0, ...row, 0]), empty];
};

const countSideSurfaces = (A: number[][]): number => {
  let sum = 0;
  for (let i = 1; i < A.length - 1; i++) {
    for (let j = 1; j < A[0].length - 1; j++) {
      const v = A[i][j];
      const top = A[i - 1][j];
      const right = A[i][j + 1];
      const bottom = A[i + 1][j];
      const left = A[i][j - 1];

      if (v > top) sum += v - top;
      if (v > right) sum += v - right;
      if (v > bottom) sum += v - bottom;
      if (v > left) sum += v - left;
    }
  }
  return sum;
};

const surfaceArea = (A: number[][]): number => {
  const rows = A.length;
  const columns = A[0].length;

  const bottomUpSum = 2 * rows * columns;

  const sidesSum = countSideSurfaces(adjustArea(A));

  return bottomUpSum + sidesSum;
};

it("", () => {
  expect(
    countSideSurfaces([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ])
  ).toBe(4);
  expect(
    countSideSurfaces([
      [0, 0, 0, 0],
      [0, 3, 1, 0],
      [0, 1, 2, 0],
      [0, 0, 0, 0],
    ])
  ).toBe(20);
  expect(
    adjustArea([
      [1, 1],
      [2, 3],
    ])
  ).toEqual([
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 2, 3, 0],
    [0, 0, 0, 0],
  ]);
  expect(surfaceArea([[1]])).toBe(6);
  expect(surfaceArea([[2]])).toBe(10);
  expect(
    surfaceArea([
      [1, 3, 4],
      [2, 2, 3],
      [1, 2, 4],
    ])
  ).toBe(60);
});
