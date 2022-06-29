const birthdayCakeCandles = (candles: number[]): number => {
  candles.sort((a, b) => { return b - a })

  let occurances = 0;

  for (const v of candles) {
    if (v !== candles[0]) { break }
    occurances += 1;
  }

  return occurances
}

it('', () => {
  expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
});