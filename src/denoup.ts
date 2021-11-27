import { cliffyCmd } from "src/deps.ts";
import { projectCmd } from "cmds/project.ts";
import { infoCmd } from "cmds/info.ts";
import { returnDenoUpData } from "project/parse.ts";
import { generateDenoUpProject } from "project/init.ts";

if (Deno.args.length === 0) {
  console.info("For use denoUp and show the commands run <denoUp -h>");
  Deno.exit(0);
}

const { options } = await new cliffyCmd.Command()
  .name("denoUp")
  .version("1.0")
  .description("The better way to start a new Deno Project")
  .command("project", projectCmd)
  .command("info", infoCmd)
  .usage("<command> --flag")
  .parse(Deno.args);

if (options.infoProject === true) {
  console.log(returnDenoUpData());
  Deno.exit(0);
}

if (options.start === true) {
  const nameProject: string = options.name;
  const versionProject: string = options.version;
  const licenseProject: string = options.license;
  const authorProject: string = options.author;
  generateDenoUpProject(
    nameProject,
    versionProject,
    licenseProject,
    authorProject,
  );
  Deno.exit(0);
}

console.log(options);
