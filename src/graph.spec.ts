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

  addEdge = (a: number, b: number): void => {
    this.#adjacences[a].push(b);
    this.#adjacences[b].push(a);
  };

  adjacences = (a: number): number[] => {
    return this.#adjacences[a];
  };
}
