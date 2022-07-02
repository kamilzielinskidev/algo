const isDividable = (d: number, a: number, b: number) => {
  return (a + b) % d === 0;
};

const check = (d: number, v: number, arr: number[]) =>
  arr.some((el) => isDividable(d, v, el));

const count = (v: number, arr: number[]) => {
  let result = 0;
  arr.forEach((el) => {
    if (el === v) result += 1;
  });
  return result;
};

const remove = (v: number, arr: number[]) => {
  arr.forEach((el, i) => {
    if (el === v) arr.splice(i, 1);
  });
};

const nonDivisibleSubset = (k: number, s: number[]) => {
  let occurances = s.map((v) => v % k);
  const checked = [] as number[];

  const zeroes = count(0, occurances);

  if (zeroes > 1) {
    occurances = occurances.filter((v) => v !== 0);
    occurances.push(0);
  }

  if (k % 2 === 0) {
    const halves = count(k / 2, occurances);
    if (halves > 1) {
      occurances = occurances.filter((v) => v !== k / 2);
      occurances.push(k / 2);
    }
  }

  occurances.forEach((v) => {
    if (checked.find((el) => el === v)) return;
    checked.push(v);
    if (check(k, v, occurances) && v !== k / 2) {
      const matchingValue = k - v;
      const countA = count(v, occurances);
      const countB = count(matchingValue, occurances);
      if (countA >= countB) remove(matchingValue, occurances);
      else remove(v, occurances);
    }
  });

  return occurances.length;
};

it("", () => {
  expect(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22])).toBe(3);
  expect(nonDivisibleSubset(1, [1, 2, 3, 4, 5])).toBe(1);
  expect(nonDivisibleSubset(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5);
});
