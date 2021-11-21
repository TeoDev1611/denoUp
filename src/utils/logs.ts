import { log } from "src/deps.ts";
import { getLogPath } from "utils/files.ts";

const headerDenoUp = `[ DENOUP ]:`;

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("INFO"),
    file: new log.handlers.FileHandler("INFO", {
      filename: getLogPath("denoUp.log"),
      formatter: "[ DENOUP ]: {levelName} -> {msg}",
    }),
  },

  loggers: {
    default: {
      level: "INFO",
      handlers: ["file"],
    },
  },
});

export function info(message: string) {
  log.info(`${headerDenoUp} ${message} :p`);
}

export function warn(message: string) {
  log.warning(`${headerDenoUp} ${message} >:|`);
}

export function error(message: string) {
  log.error(`${headerDenoUp} ${message} >:{`);
  Deno.exit(1);
}
