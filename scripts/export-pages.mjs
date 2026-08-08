import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../", import.meta.url);
const docs = new URL("../docs/", import.meta.url);
const client = new URL("../dist/client/", import.meta.url);

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(client, docs, { recursive: true });

const assets = await readdir(new URL("assets/", client));
const css = assets.find((name) => /^index-.*\.css$/.test(name));
if (!css) throw new Error("Built stylesheet not found");

const response = await fetch("http://localhost:3000/");
let html = await response.text();
html = html
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link[^>]+(?:modulepreload|data-rsc-css-href)[^>]*\/?>(?:<\/link>)?/g, "")
  .replace("</head>", `<link rel="stylesheet" href="./assets/${css}"></head>`)
  .replaceAll('href="/', 'href="./')
  .replaceAll('src="/', 'src="./');

await writeFile(new URL("index.html", docs), html);
await writeFile(new URL(".nojekyll", docs), "");
