const isDiagonal = (r_toCheck: number, c_toCheck: number, r_v: number, c_v: number) => {
  return Math.abs(r_toCheck - r_v) === Math.abs(c_toCheck - c_v);
};

const getClosestObstacles = (obstacles: ReturnType<typeof getObstacles>) => {
  return {
    dld: obstacles["dld"].sort((a, b) => b[0] - a[0])[0] ?? null,
    dlu: obstacles["dlu"].sort((a, b) => a[0] - b[0])[0] ?? null,
    drd: obstacles["drd"].sort((a, b) => b[0] - a[0])[0] ?? null,
    dru: obstacles["dru"].sort((a, b) => a[0] - b[0])[0] ?? null,
    hl: obstacles["hl"].sort((a, b) => b[1] - a[1])[0] ?? null,
    hr: obstacles["hr"].sort((a, b) => a[1] - b[1])[0] ?? null,
    vu: obstacles["vu"].sort((a, b) => a[0] - b[0])[0] ?? null,
    vd: obstacles["vd"].sort((a, b) => b[0] - a[0])[0] ?? null,
  } as Record<"hr" | "hl" | "vu" | "vd" | "dlu" | "dru" | "dld" | "drd", [r_o: number, c_o: number] | null>;
};

const getObstacles = (r_q: number, c_q: number, obstacles: [r_o: number, c_o: number][]) => {
  return {
    dld: obstacles.filter(([r, c]) => isDiagonal(r_q, c_q, r, c) && r_q > r && c_q > c),
    dlu: obstacles.filter(([r, c]) => isDiagonal(r_q, c_q, r, c) && r_q < r && c_q > c),
    drd: obstacles.filter(([r, c]) => isDiagonal(r_q, c_q, r, c) && r_q > r && c_q < c),
    dru: obstacles.filter(([r, c]) => isDiagonal(r_q, c_q, r, c) && r_q < r && c_q < c),
    hl: obstacles.filter(([r, c]) => r_q === r && c_q > c),
    hr: obstacles.filter(([r, c]) => r_q === r && c_q < c),
    vu: obstacles.filter(([r, c]) => r_q < r && c_q === c),
    vd: obstacles.filter(([r, c]) => r_q > r && c_q === c),
  } as Record<"hr" | "hl" | "vu" | "vd" | "dlu" | "dru" | "dld" | "drd", [r_o: number, c_o: number][]>;
};

const calculateToLengthClosestObstacle = (
  sizeOfBoard: number,
  r_q: number,
  c_q: number,
  closestObstacles: ReturnType<typeof getClosestObstacles>
) => {
  return {
    dld: closestObstacles["dld"] === null ? Math.min(r_q - 1, c_q - 1) : r_q - closestObstacles["dld"][0] - 1,
    dlu: closestObstacles["dlu"] === null ? Math.min(sizeOfBoard - r_q, c_q - 1) : closestObstacles["dlu"][0] - r_q - 1,
    drd: closestObstacles["drd"] === null ? Math.min(sizeOfBoard - c_q, r_q - 1) : r_q - closestObstacles["drd"][0] - 1,
    dru:
      closestObstacles["dru"] === null
        ? Math.min(sizeOfBoard - r_q, sizeOfBoard - c_q)
        : closestObstacles["dru"][0] - r_q - 1,
    hl: closestObstacles["hl"] === null ? c_q - 1 : c_q - closestObstacles["hl"][1] - 1,
    hr: closestObstacles["hr"] === null ? sizeOfBoard - c_q : closestObstacles["hr"][1] - c_q - 1,
    vu: closestObstacles["vu"] === null ? sizeOfBoard - r_q : closestObstacles["vu"][0] - r_q - 1,
    vd: closestObstacles["vd"] === null ? r_q - 1 : r_q - closestObstacles["vd"][0] - 1,
  } as Record<"hr" | "hl" | "vu" | "vd" | "dlu" | "dru" | "dld" | "drd", number>;
};

const sumLengths = (lengths: ReturnType<typeof calculateToLengthClosestObstacle>) => {
  return Object.entries(lengths).reduce((acc, [_, v]) => acc + v, 0);
};

const queensAttack = (
  n: number,
  k: number,
  r_q: number,
  c_q: number,
  obstacles: [r_o: number, c_o: number][]
): number => {
  const closestObstacles = getClosestObstacles(getObstacles(r_q, c_q, obstacles));
  return sumLengths(calculateToLengthClosestObstacle(n, r_q, c_q, closestObstacles));
};

it("", () => {
  expect(
    getObstacles(4, 3, [
      [5, 5],
      [4, 2],
      [2, 3],
    ])
  ).toEqual({
    hl: [[4, 2]],
    vd: [[2, 3]],
    hr: [],
    vu: [],
    dlu: [],
    dru: [],
    dld: [],
    drd: [],
  });

  expect(
    getClosestObstacles(
      getObstacles(4, 3, [
        [5, 5],
        [4, 2],
        [2, 3],
        [4, 1],
        [5, 3],
      ])
    )
  ).toEqual({ hl: [4, 2], vd: [2, 3], hr: null, vu: [5, 3], dlu: null, dru: null, dld: null, drd: null });
  expect(
    queensAttack(5, 3, 4, 3, [
      [5, 5],
      [4, 2],
      [2, 3],
    ])
  ).toBe(10);
});
