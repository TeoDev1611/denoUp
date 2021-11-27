import { getLogPath } from "utils/files.ts";
import { info } from "utils/logs.ts";

export const logFilePath: string = getLogPath("denoup.log");

export function openLogPath() {
  info(`Here's the path for the logger: ${logFilePath} \n`);
  const stringData: string = Deno.readTextFileSync(logFilePath);
  console.log("-----------------------------");
  console.log("File log Info");
  console.log(stringData);
}
