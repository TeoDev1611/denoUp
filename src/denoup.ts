import { cliffyCmd } from "src/deps.ts";
import { tomlCmd } from "cmds/toml.ts";
import { returnDenoUpData } from "toml/parse.ts";

if (Deno.args.length === 0) {
  console.info("For use denoUp and show the commands run <denoUp -h>");
  Deno.exit(0);
}

const { options } = await new cliffyCmd.Command()
  .name("denoUp")
  .version("1.0")
  .description("The better way to start a new Deno Project")
  .command("toml", tomlCmd)
  .usage("<command> --flag")
  .parse(Deno.args);

if (options.info === true) {
  console.log(returnDenoUpData());
  Deno.exit(0);
}
