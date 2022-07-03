class Tree {
  #list = [] as number[][];

  put = (a: number, b: number): void => {
    if (this.#list[a] === undefined) {
      this.#list[a] = [];
    }
    this.#list[a].unshift(b);

    if (this.#list[b] === undefined) {
      this.#list[b] = [];
    }
    this.#list[b].unshift(a);
  };

  search = (a: number, b: number): number[] => {
    const queue = [];
    const marking = [];
    const edgeTo = [] as number[];

    queue.push(a);
    marking[a] = true;

    while (queue.length > 0) {
      const v = queue.shift();

      for (let edge of this.#list[v!]) {
        if (!marking[edge]) {
          queue.push(edge);
          marking[edge] = true;
          edgeTo[edge] = v!;
        }
      }
    }

    const getPath = (target: number, path: number[]): number[] => {
      if (target === a) {
        return [a, ...path];
      }
      return getPath(edgeTo[target], [target, ...path]);
    };

    return getPath(b, []);
  };

  display = (): number[][] => {
    return this.#list;
  };
}

it("", () => {
  const tree = new Tree();
  tree.put(0, 5);
  tree.put(2, 4);
  tree.put(2, 3);
  tree.put(1, 2);
  tree.put(0, 1);
  tree.put(3, 4);
  tree.put(3, 5);
  tree.put(0, 2);
  expect(tree.display()).toEqual([
    [2, 1, 5],
    [0, 2],
    [0, 1, 3, 4],
    [5, 4, 2],
    [3, 2],
    [3, 0],
  ]);
  expect(tree.search(0, 3)).toEqual([0, 2, 3]);
  expect(tree.search(0, 4)).toEqual([0, 2, 4]);
});
