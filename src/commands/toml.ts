import { cliffyCmd } from "src/deps.ts";

export const tomlCmd = new cliffyCmd.Command()
  .description("Prints the DenoUp.toml information")
  .option("-i --info [info:boolean]", "Prints the DenoUp file information");
