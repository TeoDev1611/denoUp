import { log, path, toml } from "@base/deps.ts";

const denoUpCfg = async (name: string) => {
  const content: Record<string, unknown> = {
    info: [
      { name: "Example", license: "MIT" }
    ],
    run: [
      { name: "hello", command: "echo 'Hello'" }
    ]
  }

  const text = toml.stringify(content);

  await Deno.writeTextFile(`${path.join(name, "DenoUp.toml")}`, text);
  log.info(`Default Config Writed in the ${name}`)
};

const newProject = (name: string) => {
  const cwd = Deno.cwd();
  const pathProject = path.join(cwd, name);
  Deno.mkdir(pathProject);
  log.info("FOLDER CREATED");
  denoUpCfg(pathProject);
};

export { newProject };
