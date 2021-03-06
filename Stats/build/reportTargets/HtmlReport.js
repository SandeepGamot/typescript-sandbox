"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(path) {
        this.path = path;
    }
    HtmlReport.prototype.generate = function (report) {
        fs_1.default.writeFileSync(this.path, "<div style=\"font-family:verdana;\">" + report + "</div>");
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
