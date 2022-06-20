const merge = (
  arr1: number[],
  arr2: number[],
  finalArr: number[] = []
): number[] => {
  if (arr1.length === 0 && arr2.length === 0) return finalArr;
  if (arr1.length === 0) return merge([], [], [...finalArr, ...arr2]);
  if (arr2.length === 0) return merge([], [], [...finalArr, ...arr1]);
  const [arr1Head, ...arr1Tail] = arr1;
  const [arr2Head, ...arr2Tail] = arr2;
  if (arr1Head < arr2Head)
    return merge(arr1Tail, arr2, [...finalArr, arr1Head]);
  else return merge(arr1, arr2Tail, [...finalArr, arr2Head]);
};

const mergeSort = (arr: number[]): number[] => {
  if (arr.length === 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));
  return merge(left, right);
};

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(merge([1], [2])).toEqual([1, 2]);
    expect(merge([2], [1, 8])).toEqual([1, 2, 8]);
    expect(merge([1, 3, 4, 8], [2])).toEqual([1, 2, 3, 4, 8]);
  });

  it("", () => {
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([5, 2, 3, 4, 1])).toEqual([1, 2, 3, 4, 5]);
  });
}
