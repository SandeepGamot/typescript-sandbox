"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis() {
    }
    WinsAnalysis.prototype.analyze = function (matches, team) {
        var wins = 0;
        var total = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === team) {
                if (match[5] === MatchResult_1.MatchResult.HomeWin)
                    wins++;
                total++;
            }
            else if (match[2] === team) {
                if (match[5] === MatchResult_1.MatchResult.AwayWin)
                    wins++;
                total++;
            }
        }
        return "Team:" + team + " won " + wins + " out of " + total + " games. So win rate is " + ((wins / total) * 100).toFixed(2) + "%";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
