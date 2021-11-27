import { currentDir, getLogPath } from "utils/files.ts";
import { info } from "utils/logs.ts";
import { path } from "src/deps.ts";

export function openLogPath() {
  const stringData: string = Deno.readTextFileSync(
    path.join(currentDir, getLogPath("denoUp.log")),
  );
  info(`Here's the path for the logger: ${getLogPath("denoUp.log")} \n`);
  console.log(stringData);
}
