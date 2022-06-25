const getHashes = (hashes: number, places: number): string => {
  let value = "";
  const spaces = places - hashes;
  for (let index = 0; index < spaces; index++) {
    value = `${value} `;
  }
  for (let index = 0; index < hashes; index++) {
    value = `${value}#`;
  }
  return value;
};

const staircase = (n: number): void => {
  for (let index = 1; index <= n; index++) {
    console.log(getHashes(index, n));
  }
};

if (process.env["NODE_ENV"]) {
  it("", () => {
    expect(getHashes(0, 5)).toBe("     ");
    expect(getHashes(3, 5)).toBe("  ###");
  });
}
