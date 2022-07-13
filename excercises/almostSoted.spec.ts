const isSorted = (arr: number[]): boolean => {
  return arr.reduce((acc, next, index, arr) => (next > (arr[index - 1] ?? 0) ? acc : false), true);
};

const findUnfitted = (arr: number[]): null | [number, number] => {
  const copy = [...arr];
  copy.sort((a, b) => a - b);

  let unfittedOnes: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== copy[i]) {
      unfittedOnes.push(i);
    }
  }

  if (unfittedOnes.length !== 2) return null;
  return unfittedOnes as [number, number];
};

const findSequence = (arr: number[]): null | [number, number] => {
  const copy = [...arr];
  copy.sort((a, b) => a - b);

  let sequenceIndexes: number[] = [];
  let sequenceValues: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== copy[i]) {
      sequenceIndexes.push(i);
      sequenceValues.push(arr[i]);
    }
  }

  const isSequence = sequenceIndexes.every((v, i, arr) => {
    if (i === 0) return true;
    return v === arr[i - 1] + 1 || v === arr[i - 1] + 2;
  });

  const areValuesSortable = sequenceValues.every((v, i, arr) => {
    if (i === 0) return true;
    return v < arr[i - 1];
  });

  if (!(isSequence && areValuesSortable)) return null;
  return [sequenceIndexes[0], sequenceIndexes[sequenceIndexes.length - 1]];
};

const almostSorted = (arr: number[]): void => {
  if (isSorted(arr)) {
    console.log("yes");
    return;
  }

  const unfitted = findUnfitted(arr);

  if (unfitted !== null) {
    console.log("yes");
    console.log(`swap ${unfitted[0] + 1} ${unfitted[1] + 1}`);
    return;
  }

  const reverse = findSequence(arr);

  if (reverse !== null) {
    console.log("yes");
    console.log(`reverse ${reverse[0] + 1} ${reverse[1] + 1}`);
    return;
  }

  console.log("no");
};

almostSorted([1, 2, 3]);
almostSorted([4, 2]);
almostSorted([1, 5, 4, 3, 2, 6]);
almostSorted([3, 1, 2]);

it("", () => {
  expect(isSorted([1, 3, 5, 7, 8, 9])).toBe(true);
  expect(isSorted([1, 7, 3, 4, 5, 6])).toBe(false);
  expect(findUnfitted([1, 7, 4, 5, 6, 3])).toEqual([1, 5]);
  expect(findUnfitted([1, 7, 8, 5, 6, 3])).toEqual(null);
  expect(findSequence([1, 5, 4, 3, 2, 6])).toEqual([1, 4]);
  expect(findSequence([3, 1, 2])).toEqual(null);
});
