"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateStr) {
    var parts = dateStr.split("/").map(function (part) { return parseInt(part); });
    return new Date(parts[2], parts[1] - 1, parts[0]);
};
