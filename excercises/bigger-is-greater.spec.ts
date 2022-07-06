const findPivotIndex = (w: string): null | number => {
  let pivotIndex: null | number = null;

  for (let i = w.length - 1 - 1; i >= 0; i--) {
    if (w[i] < w[i + 1]) {
      pivotIndex = i;
      break;
    }
  }
  return pivotIndex;
};

const findClosestHigherIndex = (v: string, word: string): number => {
  const highest = word.split("").sort()[word.length - 1];
  let index = 0;
  let value = highest;

  for (let i = 0; i < word.length; i++) {
    if (word[i] < value && word[i] > v) {
      value = word[i];
      index = i;
    }
  }

  return index;
};

const biggerIsGreater = (w: string): string => {
  const pivotIndex = findPivotIndex(w);
  if (pivotIndex === null) return "no answer";

  const goodPart = w.slice(0, pivotIndex);

  const pivotValue = w[pivotIndex];

  const badPart = w.slice(pivotIndex + 1);
  const closestHighestIndex = findClosestHigherIndex(pivotValue, badPart);
  const closesHighestValue = badPart.split("").splice(closestHighestIndex, 1)[0];

  const okBadPart = badPart.split("");
  okBadPart[closestHighestIndex] = pivotValue;
  okBadPart.sort();

  const joinedSortedRest = okBadPart.join("");

  return [...goodPart, closesHighestValue, ...joinedSortedRest].join("");
};

it("", () => {
  expect(findPivotIndex("dkehc")).toBe(2);
  expect(findPivotIndex("ba")).toBe(null);
  expect(findPivotIndex("ab")).toBe(0);
  expect(findPivotIndex("hefg")).toBe(2);
  expect(findClosestHigherIndex("d", "cklbm")).toBe(1);
  expect(biggerIsGreater("ab")).toBe("ba");
  expect(biggerIsGreater("bb")).toBe("no answer");
  expect(biggerIsGreater("hefg")).toBe("hegf");
  expect(biggerIsGreater("dkhc")).toBe("hcdk");
  expect(biggerIsGreater("fedcbabcd")).toBe("fedcbabdc");
});
