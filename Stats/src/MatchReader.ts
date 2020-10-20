import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

export interface DataReader {
  read(source: string): string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(source: string): void {
    this.matches = this.reader.read(source).map(
      (part: string[]): MatchData => {
        return [
          dateStringToDate(part[0]),
          part[1],
          part[2],
          parseInt(part[3]),
          parseInt(part[4]),
          part[5] as MatchResult,
          part[6],
        ];
      }
    );
  }
}
