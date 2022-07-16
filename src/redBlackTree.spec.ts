export type BinaryNode = {
  key: number;
  isRed: boolean;
  parent: null | BinaryNode;
  leftChild: null | BinaryNode;
  rightChild: null | BinaryNode;
};

class RedBlackTree {
  #root: null | BinaryNode = null;

  #createNode = (key: number) => {
    return <BinaryNode>{ key, parent: null, isRed: true, leftChild: null, rightChild: null };
  };

  #rotateLeft(node: BinaryNode) {
    const parent = node.parent!;
    console.log(`rotate left ${parent.key} ${node.key}`);
    const grandParent = parent.parent;

    node.isRed = parent.isRed;
    parent.isRed = true;

    node.parent = parent.parent;
    parent.parent = node;
    if (node.leftChild) {
      parent.rightChild = node.leftChild;
      node.leftChild.parent = parent;
    }
    node.leftChild = parent;

    if (grandParent !== null) {
      grandParent.leftChild === parent ? (grandParent.leftChild = node) : (grandParent.rightChild = node);
    } else {
      this.#root = node;
    }

    this.#fix(parent);
  }

  #rotateRight(node: BinaryNode) {
    const parent = node.parent!;
    const grandParent = parent.parent!;
    const grandGrandParent = grandParent.parent;
    console.log(`rotate right ${node.key} ${parent.key} ${grandParent.key}`);

    parent.isRed = grandParent.isRed;
    grandParent.isRed = true;

    parent.parent = grandParent.parent;
    grandParent.leftChild = parent.rightChild;
    parent.rightChild = grandParent;
    grandParent.parent = parent;

    if (grandGrandParent !== null) {
      grandGrandParent.leftChild === grandGrandParent
        ? (grandGrandParent.leftChild = parent)
        : (grandGrandParent.rightChild = parent);
    } else {
      this.#root = parent;
    }

    this.#fix(grandParent);
  }

  #flip(node: BinaryNode) {
    const parent = node.parent!;
    const leftChild = parent.leftChild!;
    console.log(`flip ${leftChild.key} ${node.key}`);

    node.isRed = false;
    leftChild.isRed = false;

    parent.isRed = this.#root !== parent;

    this.#fix(parent);
  }

  #fix(node: BinaryNode) {
    const parent = node.parent;

    if (parent !== null) {
      if (parent.rightChild === node && (parent.leftChild === null || !parent.leftChild.isRed) && node.isRed) {
        this.#rotateLeft(node);
      } else if (parent.parent !== null && node.isRed && parent.isRed) {
        this.#rotateRight(node);
      } else if (parent.rightChild === node && parent.leftChild !== null && node.isRed && parent.leftChild.isRed) {
        this.#flip(node);
      }
    }
  }

  #putLeft(parent: BinaryNode, node: BinaryNode) {
    if (parent.leftChild !== null) {
      this.#put(parent.leftChild, node);
    } else {
      node.parent = parent;
      parent.leftChild = node;
      this.#fix(node);
    }
  }

  #putRight(parent: BinaryNode, node: BinaryNode) {
    if (parent.rightChild !== null) {
      this.#put(parent.rightChild, node);
    } else {
      node.parent = parent;
      parent.rightChild = node;
      this.#fix(node);
    }
  }

  #put(parent: BinaryNode, node: BinaryNode) {
    node.key < parent.key ? this.#putLeft(parent, node) : this.#putRight(parent, node);
  }

  put(key: number) {
    console.log(`put ${key}`);
    if (this.#root === null) {
      this.#root = this.#createNode(key);
      this.#root.isRed = false;
      return;
    }

    this.#put(this.#root, this.#createNode(key));
  }

  display() {
    console.log(this.#root);
  }
}

it("", () => {
  const rbt = new RedBlackTree();
  rbt.put(18);
  rbt.put(5);
  rbt.put(1);
  rbt.put(17);
  rbt.put(3);
  rbt.put(8);
  rbt.put(21);
  rbt.put(13);
  rbt.put(16);

  rbt.display();
});
