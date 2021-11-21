import { path, tomlEncoding } from "src/deps.ts";
import Ask from "https://deno.land/x/ask/mod.ts";
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

const ask = new Ask();

// Start the terminal prompt

const answers = await ask.prompt([
  {
    name: "projectName",
    message: "Project Name ? ( NextChat ):",
  },
  {
    name: "version",
    message: "Version ? ( 1.0 ):",
  },
  {
    name: "license",
    message: "License ? ( MIT ):",
  },
  {
    name: "author",
    message: "Author? ( Teo Dev ):",
  },
]);

const tomlData = {
  info: {
    name: answers.projectName,
    version: answers.version,
    license: answers.license,
    author: answers.author,
  },
  deps: {
    exampleDep: "https://deno.land/x/example/mod.ts",
  },
};

export function generateDenoUpProject() {
  const DenoUpFile: boolean = existsFile(path.join(currentDir, "DenoUp.toml"));
  if (DenoUpFile == true) {
    error(
      "Exists the DenoUp file and the current project delete the file for create a new project",
    );
  } else {
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
