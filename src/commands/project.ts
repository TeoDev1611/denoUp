import { cliffyCmd } from "src/deps.ts";

export const projectCmd = new cliffyCmd.Command()
  .description("Prints the DenoUp.toml information")
  .alias("package")
  .option(
    "-i --info [infoProject:boolean]",
    "Prints the DenoUp file information",
  )
  .option("-s --start [startProject:boolean]", "Starts a new DenoUp Project")
  .option("-l --license [licenseProject:string]", "Pass the license value")
  .option("-a --author [authorProject:string]", "Pass the author project name")
  .option(
    "-v --version [versionProject:string]",
    "Pass the version for the project",
  )
  .option("-n --name [nameProject:string]", "Pass the name for the project");
