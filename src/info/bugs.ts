import { openDenoBrowser } from "src/deps.ts";
import { info } from "utils/logs.ts";

export async function openRepoUrlBug() {
  await openDenoBrowser.open("https://github.com/TeoDev1611/denoUp/issues/new");
  info("Opened the Repo Bug URL :p");
}
