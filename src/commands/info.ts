import { cliffyCmd } from "src/deps.ts";

export const infoCmd = new cliffyCmd.Command()
  .description(
    "Helps and prints the information about DenoUp <logs, bugs, etc>",
  )
  .alias("about")
  .option("-l --logs [logsInfo:boolean]", "Prints the log file information")
  .option(
    "-b --bugs [bugsInfo:boolean]",
    "Report the bug into the repository opening the url",
  );
