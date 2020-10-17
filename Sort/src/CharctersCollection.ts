import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  public data: string[];
  constructor(data: string) {
    super();
    this.data = data.split("");
    console.log(data);
  }

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number) {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number) {
    let temp = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = temp;
  }
}
