type BinaryNode = {
  key: number;
  size: number;
  leftBranch: null | BinaryNode;
  rightBranch: null | BinaryNode;
};

class BT {
  #root: BinaryNode | null = null;

  #createNode = (value: number): BinaryNode => {
    return { key: value, leftBranch: null, rightBranch: null, size: 1 };
  };

  #put = (node: BinaryNode, parent: BinaryNode): void => {
    if (node.key <= parent.key) {
      parent.size += 1;
      parent.leftBranch === null
        ? (parent.leftBranch = node)
        : this.#put(node, parent.leftBranch);
    } else {
      parent.size += 1;
      parent.rightBranch === null
        ? (parent.rightBranch = node)
        : this.#put(node, parent.rightBranch);
    }
  };

  #find = (
    value: number,
    node: BinaryNode,
    path: number[]
  ): null | number[] => {
    if (value === node.key) return [...path, value];
    if (value < node.key && node.leftBranch !== null)
      return this.#find(value, node.leftBranch, [...path, node.key]);
    if (value > node.key && node.rightBranch !== null)
      return this.#find(value, node.rightBranch, [...path, node.key]);
    return null;
  };

  #order = (node: BinaryNode): number[] => {
    const leftBranch = node.leftBranch;
    const rightBranch = node.rightBranch;
    const leftBranchOrder = leftBranch === null ? [] : this.#order(leftBranch);
    const rightBranchOrder =
      rightBranch === null ? [] : this.#order(rightBranch);
    return [...leftBranchOrder, node.key, ...rightBranchOrder];
  };

  put = (value: number): void => {
    this.#root === null
      ? (this.#root = this.#createNode(value))
      : this.#put(this.#createNode(value), this.#root);
  };

  path = (value: number): null | number[] => {
    return this.#root === null ? null : this.#find(value, this.#root, []);
  };

  display = (): null | BinaryNode => {
    return this.#root;
  };

  order = (): null | number[] => {
    return this.#root === null ? null : this.#order(this.#root);
  };
}

if (process.env["NODE_ENV"]) {
  it("", () => {
    const bt = new BT();
    bt.put(3);

    expect(bt.path(3)).toEqual([3]);
  });

  it("", () => {
    const bt = new BT();
    bt.put(3);
    bt.put(2);
    bt.put(10);
    bt.put(7);
    bt.put(1);
    bt.put(4);

    expect(bt.path(3)).toEqual([3]);
    expect(bt.path(7)).toEqual([3, 10, 7]);
    expect(bt.path(4)).toEqual([3, 10, 7, 4]);
  });

  it("", () => {
    const bt = new BT();
    bt.put(3);
    bt.put(2);
    bt.put(10);
    bt.put(7);
    bt.put(1);
    bt.put(4);

    expect(bt.order()).toEqual([1, 2, 3, 4, 7, 10]);
  });
}
