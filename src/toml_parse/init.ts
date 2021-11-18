import { cliffyPrompt, log, path } from "src/deps.ts";

const currentDir: string = Deno.cwd();
const dataEditorConfig = `
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = crlf
charset = utf-8
`;

export async function generateDenoUpProject() {
  const resultPrompt = await cliffyPrompt.prompt([{
    name: "prjname",
    message: "What is your project name?",
    type: cliffyPrompt.Input,
  }, {
    name: "description",
    message: "Description about your project?",
    type: cliffyPrompt.Input,
  }, {
    name: "license",
    message: "Choose the license for your project",
    list: true,
    info: true,
    suggestions: [
      "MIT",
      "Apache License 2.0",
      "GNU v3.0",
      "BSD 2",
      "BSD 3",
      "Unlicensed",
    ],
    type: cliffyPrompt.Input,
  }, {
    name: "version",
    message: "What the version about your project?",
    type: cliffyPrompt.Input,
  }, {
    name: "create",
    message: "Create the project?",
    type: cliffyPrompt.Confirm,
  }]);

  console.log(resultPrompt);
  Deno.mkdir(path.join(currentDir, "src"));
  log.info("[ DENOUP ]: Created the src folder");
  Deno.writeTextFile(path.join(currentDir, ".editorconfig"), dataEditorConfig);
  log.info("[ DENOUP ]: Created the editorconfig file");
}
