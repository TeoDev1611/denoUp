import { cliffyCmd } from "src/deps.ts";

export const infoCmd = new cliffyCmd.Command()
  .description("Prints the Information about the DenoUp CLI")
  .option("-i --info [info:boolean]", "Prints the DenoUp file information")
  .option("-s --start [start:boolean]", "Starts a new DenoUp Project");
