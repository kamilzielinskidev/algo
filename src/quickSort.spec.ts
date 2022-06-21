const sneakIn = (
  arr: number[],
  indexFrom: number,
  indexTo: number
): number[] => {
  const tempArr = [...arr];
  const value = tempArr.splice(indexFrom, 1);
  tempArr.splice(indexTo, 0, ...value);
  return tempArr;
};

const partitionByLastValue = (
  arr: number[]
): { left: number[]; pivot: number; right: number[] } => {
  let tempArr = [...arr];
  const pivotValue = tempArr[tempArr.length - 1];
  let borderIndex = 0;
  for (let i = 0; i < tempArr.length - 1; i++) {
    if (arr[i] <= pivotValue) {
      tempArr = sneakIn(tempArr, i, borderIndex);
      borderIndex++;
    }
    continue;
  }
  tempArr = sneakIn(tempArr, tempArr.length - 1, borderIndex);

  return {
    left: tempArr.slice(0, borderIndex),
    pivot: tempArr[borderIndex],
    right: tempArr.slice(borderIndex + 1),
  };
};

const quickSort = (arr: number[]): number[] => {
  if (arr.length === 0) return arr;

  const { left, pivot, right } = partitionByLastValue(arr);
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);
  return [...sortedLeft, pivot, ...sortedRight];
};

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(sneakIn([1, 2, 3], 2, 0)).toEqual([3, 1, 2]);
    expect(sneakIn([1, 5, 4, 2, 3], 3, 1)).toEqual([1, 2, 5, 4, 3]);
  });

  it("", () => {
    expect(partitionByLastValue([3, 2, 1])).toEqual({
      left: [],
      pivot: 1,
      right: [3, 2],
    });
    expect(partitionByLastValue([1, 3, 5, 4, 2, 3])).toEqual({
      left: [1, 3, 2],
      pivot: 3,
      right: [5, 4],
    });
  });

  it("", () => {
    expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(quickSort([1, 3, 5, 4, 2, 3])).toEqual([1, 2, 3, 3, 4, 5]);
  });
}
