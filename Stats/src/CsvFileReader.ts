import fs from "fs";

export class CsvFileReader {
  read(filename: string): string[][] {
    return fs
      .readFileSync(filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
