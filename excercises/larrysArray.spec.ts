const rotateFrom = (A: number[], i: number): void => {
  const valuesToRotate = A.slice(i, i + 3);
  valuesToRotate.push(valuesToRotate.shift()!);
  A.splice(i, 3, ...valuesToRotate);
};

const findPivotIndex = (A: number[]): null | number => {
  const valueToFind = A.findIndex((v, i) => v !== i + 1) + 1;
  const valueIndex = A.findIndex((v) => v === valueToFind);
  if (valueIndex === A.length - 1 && A[valueIndex - 2] === A[valueIndex] - 1) return null;
  if (valueIndex === 1 && A[valueIndex] === 1) return 0;
  if (A[valueIndex] < A[valueIndex - 2]) return valueIndex - 2;
  return valueIndex - 1;
};

const larrysArray = (A: number[]): string | undefined => {
  let pivotIndex: number | null = 0;

  while (pivotIndex !== null || pivotIndex !== -2) {
    pivotIndex = findPivotIndex(A);
    if (pivotIndex === null) return "NO";
    if (pivotIndex === -2) return "YES";
    rotateFrom(A, pivotIndex);
  }
};

it("", () => {
  const test1 = [3, 1, 2];
  rotateFrom(test1, 0);
  expect(test1).toEqual([1, 2, 3]);

  const test2 = [1, 3, 4, 2];
  rotateFrom(test2, 1);
  expect(test2).toEqual([1, 4, 2, 3]);
});

it("", () => {
  expect(findPivotIndex([1, 3, 4, 2])).toBe(1);
  expect(findPivotIndex([3, 1, 2])).toBe(0);
  expect(findPivotIndex([1, 6, 5, 2, 4, 3])).toBe(1);
  expect(findPivotIndex([1, 5, 2, 6, 4, 3])).toBe(1);
  expect(findPivotIndex([1, 2, 3, 5, 4])).toBe(null);
  expect(findPivotIndex([1, 2, 3])).toBe(-2);
});

it("", () => {
  expect(larrysArray([3, 1, 2])).toBe("YES");
  expect(larrysArray([1, 3, 4, 2])).toBe("YES");
  expect(larrysArray([1, 2, 3, 5, 4])).toBe("NO");
});
