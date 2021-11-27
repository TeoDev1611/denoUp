import { path, tomlEncoding } from "src/deps.ts";

const currentDir: string = Deno.cwd();

export const returnDenoUpData = (): Record<string, unknown> => {
  const stringData: string = Deno.readTextFileSync(
    path.join(currentDir, "DenoUp.toml"),
  );
  const tomlData = tomlEncoding.parse(stringData);
  return tomlData;
};
