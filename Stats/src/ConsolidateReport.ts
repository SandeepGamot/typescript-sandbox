import { MatchData } from "./MatchData";

export interface Analyzer {
  analyze(matches: MatchData[], team: string): string;
}

export interface OutputTarget {
  generate(report: string): void;
}

export class ConsolidateReport {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  getReport(matches: MatchData[], team: string): void {
    this.outputTarget.generate(this.analyzer.analyze(matches, team));
  }
}
