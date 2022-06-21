type Vector = number[];
type Matrix = number[][];

const getLeftToRightDiagonal1 = (
  matrix: Matrix,
  rowIndex = 0,
  vector: number[] = []
): Vector => {
  if (rowIndex === matrix.length) {
    return vector;
  }
  return getLeftToRightDiagonal1(matrix, rowIndex + 1, [
    ...vector,
    matrix[rowIndex][rowIndex],
  ]);
};

const getLeftToRightDiagonal2 = (arr: number[][]): number[] => {
  const vector = [];
  for (let i = 0; i < arr.length; i++) {
    vector.push(arr[i][i]);
  }
  return vector;
};

const size = 1000;

const matrix = Array(size)
  .fill(null)
  .map(() => Array(size).fill(Math.floor(Math.random() * size)));

console.time("recursion");
getLeftToRightDiagonal1(matrix);
console.timeEnd("recursion");

console.time("oo");
getLeftToRightDiagonal2(matrix);
console.timeEnd("oo");

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(getLeftToRightDiagonal1([[1]])).toEqual([1]);
    expect(
      getLeftToRightDiagonal1([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([1, 4]);
    expect(
      getLeftToRightDiagonal2([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([1, 4]);
    expect(
      getLeftToRightDiagonal2([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([1, 4]);
  });
}
