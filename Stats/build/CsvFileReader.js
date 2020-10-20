"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader() {
    }
    CsvFileReader.prototype.read = function (filename) {
        return fs_1.default
            .readFileSync(filename, { encoding: "utf-8" })
            .split("\n")
            .map(function (row) { return row.split(","); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
