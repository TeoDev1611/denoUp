import { cliffyCmd, tomlEncoding } from "src/deps.ts";


if (Deno.args.length === 0){
  console.info("For use denoUp and show the commands run <denoUp -h>")
  Deno.exit(0)
}

await new cliffyCmd.Command()
  .name("denoUp")
  .version("1.0")
  .description("The better way to start a new Deno Project")
  .usage(`denoup <command> -f --flag`)
  .parse(Deno.args)