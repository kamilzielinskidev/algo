const findClosestStationDistance = (index: number, stations: number[]): number => {
  let closest = Infinity;

  for (let i = 0; i < stations.length; i++) {
    const distance = Math.abs(index - stations[i]);
    if (distance < closest) closest = distance;
  }

  return closest;
};

const flatlandSpaceStations = (n: number, c: number[]): number => {
  let max = 0;

  for (let i = 0; i < n; i++) {
    const distance = findClosestStationDistance(i, c);
    if (distance > max) max = distance;
  }

  return max;
};

it("", () => {
  expect(findClosestStationDistance(0, [0, 1, 2, 3, 4, 5])).toBe(0);
  expect(findClosestStationDistance(5, [0, 1, 2, 3, 4, 5])).toBe(0);
  expect(findClosestStationDistance(3, [0, 1, 2, 4, 5])).toBe(1);
  expect(findClosestStationDistance(2, [0, 4, 5])).toBe(2);
  expect(flatlandSpaceStations(5, [0, 4])).toBe(2);
  expect(flatlandSpaceStations(6, [0, 1, 2, 3, 4, 5])).toBe(0);
});
