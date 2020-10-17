import { Sorter } from "./Sorter";

export class LinkedList extends Sorter {
  private len: number = 0;
  public head: Node | null = null;
  private end: Node | null = null;

  get length(): number {
    return this.len;
  }

  add(data: number): void {
    if (this.head === null) {
      this.head = new Node(data);
      this.end = this.head;
    } else if (this.end) {
      this.end.next = new Node(data);
      this.end = this.end.next;
    }
    this.len++;
  }

  at(index: number): Node {
    let runner = this.head;
    let count = 0;

    while (runner) {
      if (count === index) return runner;
      count++;
      runner = runner.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(left: number, right: number): boolean {
    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    const leftNode = this.at(left);
    const rightNode = this.at(right);
    let tmp = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = tmp;
  }

  print(): void {
    let runner = this.head;
    while (runner) {
      console.log(`
      ${runner.data}
      |
      V
      `);
      runner = runner.next;
    }
    console.log("null");
  }
}

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}
