import { path, tomlEncoding } from "src/deps.ts";

const currentDir: string = Deno.cwd();

export const returnDenoUpData = async () => {
  const stringData: string = await Deno.readTextFile(
    path.join(currentDir, "DenoUp.toml"),
  );
  console.log(tomlEncoding.parse(stringData));
};
