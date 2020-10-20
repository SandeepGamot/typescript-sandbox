import { ConsolidateReport } from "./ConsolidateReport";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { AverageGoalsAnalysis } from "./analyzers/AverageGoalsAnalysis";

const reader = new MatchReader(new CsvFileReader());
reader.load("football.csv");

let team = "Man City";
let path = "reports/";

const winsOnConsole = new ConsolidateReport(
  new WinsAnalysis(),
  new ConsoleReport()
);
winsOnConsole.getReport(reader.matches, team);

const winsInHtml = new ConsolidateReport(
  new WinsAnalysis(),
  new HtmlReport(`${path}wins.html`)
);
winsInHtml.getReport(reader.matches, team);

const avgGoalsOnConsole = new ConsolidateReport(
  new AverageGoalsAnalysis(),
  new ConsoleReport()
);

avgGoalsOnConsole.getReport(reader.matches, team);

const avgGoalsInHtml = new ConsolidateReport(
  new AverageGoalsAnalysis(),
  new HtmlReport(`${path}avg.html`)
);
avgGoalsInHtml.getReport(reader.matches, team);
