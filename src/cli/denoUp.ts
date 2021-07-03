import { Command } from "@base/deps.ts";
import { newProject } from "@core/new.ts";

const { options } = await new Command()
  .name("denoup")
  .version("0.1.0")
  .description("The best way for start and manage a Deno Project")
  .example("denoup --new example", "Create a new project for Deno")
  .option("-n, --new [name:string]", "Create a new deno Project")
  .parse(Deno.args);

if (options.new !== true) {
  newProject(options.new);
}
