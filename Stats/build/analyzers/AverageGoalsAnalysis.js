"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = void 0;
var AverageGoalsAnalysis = /** @class */ (function () {
    function AverageGoalsAnalysis() {
    }
    AverageGoalsAnalysis.prototype.analyze = function (matches, team) {
        var total = 0;
        var goals = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === team) {
                goals += match[3];
                total++;
            }
            else if (match[2] === team) {
                goals += match[4];
                total++;
            }
        }
        return "The team " + team + " played a total of " + total + " games and scored a total of " + goals + " goals. So the average goal is " + (goals / total).toFixed(2) + " goals.";
    };
    return AverageGoalsAnalysis;
}());
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
