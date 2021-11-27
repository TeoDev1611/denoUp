import { cliffyCmd } from "src/deps.ts";

export const projectCmd = new cliffyCmd.Command()
  .description("Prints the DenoUp.toml information")
  .option("-i --info [info:boolean]", "Prints the DenoUp file information")
  .option("-s --start [start:boolean]", "Starts a new DenoUp Project");
