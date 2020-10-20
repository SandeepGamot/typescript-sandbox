"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolidateReport = void 0;
var ConsolidateReport = /** @class */ (function () {
    function ConsolidateReport(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    ConsolidateReport.prototype.getReport = function (matches, team) {
        this.outputTarget.generate(this.analyzer.analyze(matches, team));
    };
    return ConsolidateReport;
}());
exports.ConsolidateReport = ConsolidateReport;
