export class QuickFindUF {
  constructor(size: number) {
    this.#nodes = new Array(size).fill(null).map((_, i) => i);
  }

  #nodes: number[];

  connected = (p: number, q: number) => this.#nodes[p] === this.#nodes[q];

  union = (p: number, q: number) => {
    const pid = this.#nodes[p];
    const qid = this.#nodes[q];
    for (let [nodeValue, nodeIndex] of this.#nodes.entries()) {
      if (nodeValue === pid) this.#nodes[nodeIndex] = qid;
    }
  };

  display = () => console.log(this.#nodes);
}

export class QuickUnionUF {
  constructor(size: number) {
    this.#nodes = new Array(size).fill(null).map((_, i) => i);
  }

  #nodes: number[];

  #root(node: number) {
    while (node !== this.#nodes[node]) node = this.#nodes[node];
    return node;
  }

  connected = (p: number, q: number) => this.#root(p) === this.#root(q);

  union = (p: number, q: number) => {
    const i = this.#root(p);
    const j = this.#root(q);
    this.#nodes[i] = j;
  };

  display = () => console.log(this.#nodes);
}

export class WeightedUnionUF {
  constructor(size: number) {
    this.#nodes = new Array(size).fill(null).map((_, i) => i);
    this.#sizeArr = new Array(size).fill(1);
  }

  #nodes: number[];
  #sizeArr: number[];

  #root(node: number) {
    while (node !== this.#nodes[node]) node = this.#nodes[node];
    return node;
  }

  connected = (p: number, q: number) => this.#root(p) === this.#root(q);

  union = (p: number, q: number) => {
    const i = this.#root(p);
    const j = this.#root(q);

    if (this.#sizeArr[i] >= this.#sizeArr[j]) {
      this.#nodes[j] = i;
      this.#sizeArr[i] += this.#sizeArr[j];
    } else {
      this.#nodes[i] = j;
      this.#sizeArr[j] += this.#sizeArr[i];
    }
  };

  display = () => console.log(this.#nodes);
}
