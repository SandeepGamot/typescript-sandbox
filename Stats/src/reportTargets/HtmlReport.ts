import fs from "fs";
import { OutputTarget } from "../ConsolidateReport";

export class HtmlReport implements OutputTarget {
  constructor(public path: string) {}

  generate(report: string): void {
    fs.writeFileSync(
      this.path,
      `<div style="font-family:verdana;">${report}</div>`
    );
  }
}
