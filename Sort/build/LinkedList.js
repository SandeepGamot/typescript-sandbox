"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.len = 0;
        _this.head = null;
        _this.end = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            return this.len;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        if (this.head === null) {
            this.head = new Node(data);
            this.end = this.head;
        }
        else if (this.end) {
            this.end.next = new Node(data);
            this.end = this.end.next;
        }
        this.len++;
    };
    LinkedList.prototype.at = function (index) {
        var runner = this.head;
        var count = 0;
        while (runner) {
            if (count === index)
                return runner;
            count++;
            runner = runner.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (left, right) {
        return this.at(left).data > this.at(right).data;
    };
    LinkedList.prototype.swap = function (left, right) {
        var leftNode = this.at(left);
        var rightNode = this.at(right);
        var tmp = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = tmp;
    };
    LinkedList.prototype.print = function () {
        var runner = this.head;
        while (runner) {
            console.log("\n      " + runner.data + "\n      |\n      V\n      ");
            runner = runner.next;
        }
        console.log("null");
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
