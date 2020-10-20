import { Analyzer } from "../ConsolidateReport";
import { MatchData } from "../MatchData";

export class AverageGoalsAnalysis implements Analyzer {
  analyze(matches: MatchData[], team: string): string {
    let total = 0;
    let goals = 0;
    for (let match of matches) {
      if (match[1] === team) {
        goals += match[3];
        total++;
      } else if (match[2] === team) {
        goals += match[4];
        total++;
      }
    }

    return `The team ${team} played a total of ${total} games and scored a total of ${goals} goals. So the average goal is ${(
      goals / total
    ).toFixed(2)} goals.`;
  }
}
