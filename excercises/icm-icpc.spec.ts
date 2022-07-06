const calcTeam = (a: string, b: string) => {
  let sum = 0;

  for (let index = 0; index < a.length; index++) {
    if (a[index] === "1" || b[index] === "1") sum++;
  }

  return sum;
};

const acmTeam = (topic: string[]): number[] => {
  let max = 0;
  let amount = 0;

  for (let i = 0; i < topic.length; i++) {
    for (let j = i + 1; j < topic.length; j++) {
      const score = calcTeam(topic[i], topic[j]);
      if (score === max) {
        amount++;
      }
      if (score > max) {
        max = score;
        amount = 1;
      }
    }
  }

  return [max, amount];
};

it("", () => {
  expect(calcTeam("10101", "11100")).toBe(4);
  expect(calcTeam("10111", "11100")).toBe(5);
  expect(acmTeam(["10101", "11100", "11010", "00101"])).toEqual([5, 2]);
  expect(acmTeam(["11101", "10101", "11001", "10111", "10000", "01110"])).toEqual([5, 6]);
});
