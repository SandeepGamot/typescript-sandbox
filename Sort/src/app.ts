import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharctersCollection";
import { LinkedList } from "./LinkedList";

// const str = new CharactersCollection("Sandeep");
// const nums = new NumbersCollection([1, 2, 3, 4]);

const list = new LinkedList();

for (let i = 0; i < 5; i++) {
  list.add(Math.floor(Math.random() * 1000));
}
// console.log(list.length);
console.log("before sort");
list.print();
list.sort();
console.log("after sort");
list.print();
