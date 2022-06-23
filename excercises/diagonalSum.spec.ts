type Matrix = number[][];
type Vector = number[];

const getLeftToRight = (matrix: Matrix): Vector => {
  const vector = [];
  for (let i = 0; i < matrix.length; i++) {
    vector.push(matrix[i][i]);
  }
  return vector;
};

const getRightToLeft = (matrix: Matrix): Vector => {
  const vector = [];
  for (let i = 0; i < matrix.length; i++) {
    vector.push(matrix[i][matrix.length - 1 - i]);
  }
  return vector;
};

const getVectorSum = (vector: Vector) => {
  let sum = 0;
  for (let i = 0; i < vector.length; i++) {
    sum += vector[i];
  }
  return sum;
};

const diagonalDifference = (matrix: Matrix): number => {
  const leftToRightSum = getVectorSum(getLeftToRight(matrix));
  const rightToLeftSum = getVectorSum(getRightToLeft(matrix));
  return Math.abs(leftToRightSum - rightToLeftSum);
};

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(
      getLeftToRight([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([1, 4]);
  });
  it("", () => {
    expect(
      getRightToLeft([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([2, 3]);
  });
  it("", () => {
    expect(getVectorSum([1, 2, 3, 4, 9])).toEqual(19);
  });
  it("", () => {
    expect(diagonalDifference([[1]])).toEqual(0);
    expect(
      diagonalDifference([
        [1, 2, 100],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual(97);
  });
}
