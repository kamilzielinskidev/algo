const intDivide = (by: number, v: number) => Math.floor(v / by);

const maxHeapify = (arr: number[], i: number): number[] => {
  const val = arr[i];
  const left = arr[i * 2 + 1];
  const right = arr[i * 2 + 2];

  if (left > (right || 0)) {
    if (val < left) {
      arr[i * 2 + 1] = val;
      arr[i] = left;
      maxHeapify(arr, i * 2 + 1);
    }
  } else {
    if (val < right) {
      arr[i * 2 + 2] = val;
      arr[i] = right;
      maxHeapify(arr, i * 2 + 2);
    }
  }

  return arr;
};

const buildHeap = (arr: number[]) => {
  for (let i = arr.length; i >= 0; i--) {
    maxHeapify(arr, i);
  }
  return arr;
};

const heapSort = (arr: number[]): number[] => {
  const theHeap = buildHeap([...arr]);
  const result = [];

  while (theHeap.length > 1) {
    result.push(theHeap[0]);
    theHeap[0] = theHeap.pop();
    maxHeapify(theHeap, 0);
  }
  result.push(theHeap[0]);

  return result;
};

it("", () => {
  expect(maxHeapify([16, 4, 10, 14, 7, 9, 3, 2, 8, 1], 1)).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
});

it("", () => {
  expect(buildHeap([4, 1, 3, 2, 16, 9, 10, 14, 8, 7])).toEqual([16, 14, 10, 8, 7, 9, 3, 2, 4, 1]);
});

it("random", () => {
  expect(heapSort([3, 5, 1, 1, 2, 4])).toEqual([5, 4, 3, 2, 1, 1]);
});

it("reversed", () => {
  expect(heapSort([1, 2, 3])).toEqual([3, 2, 1]);
});
