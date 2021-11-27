import { path, tomlEncoding } from "src/deps.ts";
import { currentDir } from "utils/files.ts";

export const returnDenoUpData = (): Record<string, unknown> => {
  const stringData: string = Deno.readTextFileSync(
    path.join(currentDir, "DenoUp.toml"),
  );
  const tomlData = tomlEncoding.parse(stringData);
  return tomlData;
};
