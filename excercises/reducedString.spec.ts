const superReducedString = (s: string): string => {
  if (s.length === 0) return "Empty String";

  const splitted = s.split("");
  const valueToRemove = splitted.findIndex((v, i, arr) => v === arr[i + 1]);

  if (valueToRemove === -1) return s;

  splitted.splice(valueToRemove, 2);

  return superReducedString(splitted.join(""));
};

it("", () => {
  expect(superReducedString("baab")).toBe("Empty String");
  expect(superReducedString("baaab")).toBe("bab");
  expect(superReducedString("aaabccddd")).toBe("abd");
});
