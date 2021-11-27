import { openDenoBrowser } from "src/deps.ts";
import { info } from "utils/logs.ts";

export async function openRepoUrlBug() {
  info("Opened the Repo Bug URL");
  await openDenoBrowser.open("https://github.com/TeoDev1611/denoUp/issues/new");
}
