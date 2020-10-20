import { OutputTarget } from "../ConsolidateReport";

export class ConsoleReport implements OutputTarget {
  generate(report: string): void {
    console.log(report);
  }
}
