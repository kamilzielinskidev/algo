type Bag<T> = T[][];

export class Graph {
  constructor(v: number) {
    this.#v = v;
    this.#adjacences = Array(v)
      .fill(null)
      .map(() => [] as number[]);
  }

  #v: number = 0;
  #adjacences: Bag<number> = [];
  #marked: boolean[] = [];
  edgeTo: number[] = [];

  #dfs = (a: number) => {
    this.#marked[a] = true;
    for (let [indexOfAdjacency] of this.#adjacences.entries()) {
      if (this.#marked[indexOfAdjacency] === false) {
        this.#dfs(indexOfAdjacency);
      }
    }
  };

  addEdge = (a: number, b: number): void => {
    this.#adjacences[a].push(b);
    this.#adjacences[b].push(a);
  };

  adjacences = (a: number): number[] => {
    return this.#adjacences[a];
  };

  Dfs = (a: number) => {
    this.#dfs(a);
  };
}
