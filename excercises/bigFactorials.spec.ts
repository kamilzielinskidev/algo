const calculateBigFactorial = (value: number): BigInt => {
  let result = BigInt(value);
  for (let index = value - 1; index > 0; index--) {
    result *= BigInt(index);
  }

  return result;
};

const extraLongFactorials = (n: number): void => {
  console.log(calculateBigFactorial(n).toString());
};

it("", () => {
  expect(calculateBigFactorial(3)).toEqual(BigInt(6));
  expect(calculateBigFactorial(4)).toEqual(BigInt(24));
  expect(calculateBigFactorial(5)).toEqual(BigInt(120));
});
