"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const str = new CharactersCollection("Sandeep");
// const nums = new NumbersCollection([1, 2, 3, 4]);
var list = new LinkedList_1.LinkedList();
for (var i = 0; i < 5; i++) {
    list.add(Math.floor(Math.random() * 1000));
}
// console.log(list.length);
console.log("before sort");
list.print();
list.sort();
console.log("after sort");
list.print();
