const absolutePermutation = (n: number, k: number): number[] => {
  if (k === 0)
    return Array(n)
      .fill(null)
      .map((_, i) => i + 1);

  if (n % k !== 0 || (n / k) % 2 !== 0) return [-1];
  if (n % 2 === 1 && k !== n) return [-1];

  return new Array(n)
    .fill(null)
    .map((_, i) => i + 1)
    .map((v) => {
      const a = v % k || k;
      const iter = Math.floor((v - 1) / k);

      if (iter % 2 === 0) {
        return (iter + 1) * k + a;
      } else {
        return (iter - 1) * k + a;
      }
    });
};

it("", () => {
  expect(absolutePermutation(10, 9)).toEqual([-1]);
  expect(absolutePermutation(6966, 162)).toEqual([-1]);
  expect(absolutePermutation(4, 2)).toEqual([3, 4, 1, 2]);
  expect(absolutePermutation(4, 0)).toEqual([1, 2, 3, 4]);
  expect(absolutePermutation(10, 1)).toEqual([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]);
  expect(absolutePermutation(8, 2)).toEqual([3, 4, 1, 2, 7, 8, 5, 6]);
});
