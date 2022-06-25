type BinaryNode = {
  key: number;
  leftBranch: null | BinaryNode;
  rightBranch: null | BinaryNode;
};

class BT {
  #root: BinaryNode | null = null;

  #createNode = (value: number): BinaryNode => {
    return { key: value, leftBranch: null, rightBranch: null };
  };

  #put = (node: BinaryNode, parent: BinaryNode): void => {
    if (node.key <= parent.key) {
      if (parent.leftBranch === null) {
        parent.leftBranch = node;
      } else {
        this.#put(node, parent.leftBranch);
      }
    } else {
      if (parent.rightBranch === null) {
        parent.rightBranch = node;
      } else {
        this.#put(node, parent.rightBranch);
      }
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

  put = (value: number): BinaryNode => {
    if (this.#root === null) {
      this.#root = this.#createNode(value);
      return this.#root;
    }
    const node = this.#createNode(value);
    this.#put(node, this.#root);
    return node;
  };

  find = (value: number): null | number[] => {
    if (this.#root === null) return null;
    return this.#find(value, this.#root, []);
  };

  display = (): null | BinaryNode => {
    return this.#root;
  };
}

if (process.env["NODE_ENV"]) {
  it("", () => {
    const bt = new BT();
    bt.put(3);

    expect(bt.find(3)).toEqual([3]);
  });

  it("", () => {
    const bt = new BT();
    bt.put(3);
    bt.put(2);
    bt.put(10);
    bt.put(7);
    bt.put(1);
    bt.put(4);

    console.log(bt.display());

    expect(bt.find(3)).toEqual([3]);
    expect(bt.find(7)).toEqual([3, 10, 7]);
    expect(bt.find(4)).toEqual([3, 10, 7, 4]);
  });
}
