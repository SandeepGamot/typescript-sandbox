"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    }
    MatchReader.prototype.load = function (source) {
        this.matches = this.reader.read(source).map(function (part) {
            return [
                utils_1.dateStringToDate(part[0]),
                part[1],
                part[2],
                parseInt(part[3]),
                parseInt(part[4]),
                part[5],
                part[6],
            ];
        });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
