import { Analyzer } from "../ConsolidateReport";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {

  analyze(matches: MatchData[], team:string): string {
    let wins = 0;
    let total = 0;

    for (let match of matches) {
        if (match[1] === team)
        {
          if(match[5] === MatchResult.HomeWin) wins++;
          total++;
        }         
        else if (match[2] === team)
        {
          if(match[5] === MatchResult.AwayWin)wins++;
          total++;
        }
  }
    return `Team:${team} won ${wins} out of ${total} games. So win rate is ${((wins/total)*100).toFixed(2)}%`;
    }
  }
}
