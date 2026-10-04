import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";

const docs = new URL("../docs/", import.meta.url);
const client = new URL("../dist/client/", import.meta.url);
const previewOrigin = process.env.EXPORT_ORIGIN;
const worker = previewOrigin ? null : (await import("../dist/server/index.js")).default;

await rm(docs, { recursive: true, force: true });
await mkdir(docs, { recursive: true });
await cp(client, docs, { recursive: true });

const assets = await readdir(new URL("assets/", client));
const css = assets.find((name) => /^index-.*\.css$/.test(name));
if (!css) throw new Error("Built stylesheet not found");

// Stylesheets live in docs/assets; fonts must resolve below the repository URL.
for (const name of assets.filter((name) => name.endsWith(".css"))) {
  const path = new URL(`assets/${name}`, docs);
  const stylesheet = await readFile(path, "utf8");
  await writeFile(path, stylesheet.replaceAll("/assets/", "./"));
}

async function exportPage(route, output, prefix) {
  const response = previewOrigin
    ? await fetch(`${previewOrigin}${route}`)
    : await worker.fetch(
        new Request(`http://localhost${route}`, { headers: { accept: "text/html" } }),
        { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
        { waitUntil() {}, passThroughOnException() {} },
      );
  if (!response.ok) throw new Error(`Cannot export ${route}: HTTP ${response.status}`);
  let html = await response.text();
  html = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]+(?:modulepreload|data-rsc-css-href)[^>]*\/?>(?:<\/link>)?/g, "")
    .replace("</head>", `<link rel="stylesheet" href="${prefix}assets/${css}"></head>`)
    .replaceAll('href="/kalahooska"', `href="${prefix}kalahooska/"`)
    .replaceAll('href="/#', `href="${prefix}#`)
    .replaceAll('href="/"', `href="${prefix}"`)
    .replaceAll('href="/', `href="${prefix}`)
    .replaceAll('src="/', `src="${prefix}`)
    .replaceAll("url(/", `url(${prefix}`)
    .replace("</body>", `<script src="${prefix}campaign.js" defer></script></body>`);
  const target = new URL(output, docs);
  await mkdir(new URL("./", target), { recursive: true });
  await writeFile(target, html);
}

await exportPage("/", "index.html", "./");
await exportPage("/agenda", "agenda/index.html", "../");
await exportPage("/about", "about/index.html", "../");
await exportPage("/kalahooska", "kalahooska/index.html", "../");
await writeFile(new URL(".nojekyll", docs), "");
