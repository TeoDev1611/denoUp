import { path, tomlEncoding } from "src/deps.ts";
import Ask from "https://deno.land/x/ask@1.0.6/mod.ts";
import { currentDir, existsFile } from "utils/files.ts";
import { error, info } from "utils/logs.ts";

export const editorConfigData = `
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = crlf
charset = utf-8
`;

export function generateDenoUpProject(
  projectName = "NextChat",
  version = "1.0",
  license = "MIT",
  author = "Jhon Doe",
) {
  const DenoUpFile: boolean = existsFile(path.join(currentDir, "DenoUp.toml"));
  if (DenoUpFile == true) {
    error(
      "Exists the DenoUp file and the current project delete the file for create a new project",
    );
  } else {
    const tomlData = {
      info: {
        name: projectName,
        version: version,
        license: license,
        author: author,
      },
      deps: {
        exampleDepName: "https://deno.land/x/example/mod.ts",
      },
    };
    Deno.writeTextFileSync(
      path.join(currentDir, "DenoUp.toml"),
      tomlEncoding.stringify(tomlData),
    );
    info("The <DenoUp.toml> file created");
    Deno.mkdir(path.join(currentDir, "src"));
    info("The <src> folder created");
    Deno.writeTextFileSync(
      path.join(currentDir, ".editorconfig"),
      editorConfigData,
    );
    info("The <.editorconfig> file created with the default config");
  }
}
