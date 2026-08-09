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

async function exportPage(route, output, prefix) {
  const response = await fetch(`http://localhost:3000${route}`);
  let html = await response.text();
  html = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]+(?:modulepreload|data-rsc-css-href)[^>]*\/?>(?:<\/link>)?/g, "")
    .replace("</head>", `<link rel="stylesheet" href="${prefix}assets/${css}"></head>`)
    .replaceAll('href="/kalahooska"', `href="${prefix}kalahooska/"`)
    .replaceAll('href="/#', `href="${prefix}#`)
    .replaceAll('href="/"', `href="${prefix}"`)
    .replaceAll('href="/', `href="${prefix}`)
    .replaceAll('src="/', `src="${prefix}`);
  const target = new URL(output, docs);
  await mkdir(new URL("./", target), { recursive: true });
  await writeFile(target, html);
}

await exportPage("/", "index.html", "./");
await exportPage("/kalahooska", "kalahooska/index.html", "../");
await writeFile(new URL(".nojekyll", docs), "");
