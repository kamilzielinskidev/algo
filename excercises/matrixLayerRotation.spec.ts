const innerCircle = (matrix: number[][]): [[number, number], [number, number]] => {
  const rows = matrix.length - 1;
  const columns = matrix[0].length - 1;
  const shorterDistance = Math.floor(Math.min(rows, columns) / 2);

  return [
    [shorterDistance, shorterDistance],
    [rows - shorterDistance, columns - shorterDistance],
  ];
};

it("", () => {
  expect(
    innerCircle([
      [1, 2, 3, 4, 5, 6],
      [4, 5, 6, 7, 8, 9],
      [7, 8, 9, 10, 11, 12],
    ])
  ).toEqual([
    [1, 1],
    [1, 4],
  ]);
  expect(
    innerCircle([
      [1, 2, 3],
      [4, 5, 6],
    ])
  ).toEqual([
    [0, 0],
    [1, 2],
  ]);
});

const rotate = (matrix: number[][], leftTop: [number, number], rightBottom: [number, number], r: number) => {
  const lengthOfCircle = (rightBottom[0] - leftTop[0] + 1) * 2 + (rightBottom[1] - leftTop[1] - 1) * 2;
  const dividedR = r % lengthOfCircle;

  for (let i = 0; i < dividedR; i++) {
    const result: number[][] = [[], [], [], []];
    for (let i = leftTop[1]; i < rightBottom[1] + 1; i++) {
      result[0].push(matrix[leftTop[0]][i]);
      result[2].push(matrix[rightBottom[0]][i]);
    }
    for (let i = leftTop[0]; i < rightBottom[0] + 1; i++) {
      result[1].push(matrix[i][rightBottom[1]]);
      result[3].push(matrix[i][leftTop[1]]);
    }

    result[0].push(result[1][1]);
    result[2].unshift(result[3][1]);
    result[1].push(result[2][result[2].length - 2]);
    result[3].unshift(result[0][1]);
    result[0].shift();
    result[2].pop();
    result[1].shift();
    result[3].pop();

    for (let i = 0; i < result[0].length; i++) {
      matrix[leftTop[0]][leftTop[1] + i] = result[0][i];
      matrix[rightBottom[0]][leftTop[1] + i] = result[2][i];
    }
    for (let i = 0; i < result[1].length; i++) {
      matrix[leftTop[0] + i][rightBottom[1]] = result[1][i];
      matrix[leftTop[0] + i][leftTop[1]] = result[3][i];
    }
  }
};

it("", () => {
  const matrix = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [7, 8, 9, 10],
    [7, 8, 9, 10],
    [7, 8, 9, 10],
  ];
  rotate(matrix, [1, 1], [3, 2], 3);
  expect(matrix).toEqual([
    [1, 2, 3, 4],
    [4, 9, 8, 7],
    [7, 9, 8, 10],
    [7, 6, 5, 10],
    [7, 8, 9, 10],
  ]);
});

const matrixRotation = (matrix: number[][], r: number): void => {
  const [leftTop, rightBottom] = innerCircle(matrix);
  const aomuntOfInnerCircles = leftTop[0];

  for (let i = 0; i <= aomuntOfInnerCircles; i++) {
    rotate(matrix, [leftTop[0] - i, leftTop[1] - i], [rightBottom[0] + i, rightBottom[1] + i], r);
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
};
