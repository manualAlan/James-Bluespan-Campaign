import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const docs = resolve(fileURLToPath(new URL("../docs/", import.meta.url)));
const pages = ["index.html", "agenda/index.html", "about/index.html"];

for (const page of pages) {
  test(`${page} exports the 2070 campaign without hydration dependencies`, async () => {
    const html = await readFile(join(docs, page), "utf8");
    assert.match(html, /<title>[^<]*2070[^<]*<\/title>/);
    assert.doesNotMatch(html, /2066|Fredrick|Madden|Reno|codex-preview/);
    assert.match(html, /id="main-content"/);
    assert.match(html, /id="join"/);
    assert.match(html, /<script src="(?:\.\/|\.\.\/)campaign\.js" defer><\/script>/);
    assert.doesNotMatch(html, /type="module"|self\.__next_f|text\/x-component/);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1);

    // Follow the actual exported URLs, including cross-page anchor links.
    for (const match of html.matchAll(/(?:href|src)="([^"?#]+)(?:\?[^"#]*)?(?:#([^" ]+))?"/g)) {
      const [, href, fragment] = match;
      if (/^(https?:|mailto:|data:)/.test(href)) continue;
      assert.ok(!href.startsWith("/"), `${page}: root-relative URL ${href}`);
      let target = resolve(dirname(join(docs, page)), href);
      assert.ok(target === docs || target.startsWith(`${docs}/`), `${page}: URL escapes the export`);
      if (href.endsWith("/")) target = join(target, "index.html");
      await access(target);
      if (fragment && target.endsWith(".html")) {
        const linkedHtml = await readFile(target, "utf8");
        assert.ok(linkedHtml.includes(`id="${fragment}"`), `${href}#${fragment} has no target`);
      }
    }
    for (const [, fragment] of html.matchAll(/href="#([^" ]+)"/g)) {
      assert.ok(html.includes(`id="${fragment}"`), `${page}: missing #${fragment}`);
    }
    for (const [, font] of html.matchAll(/url\(([^)]+\.woff2)\)/g)) {
      await access(resolve(dirname(join(docs, page)), font));
    }
  });
}

test("exported CSS resolves bundled fonts beneath the GitHub Pages base path", async () => {
  const assets = await readdir(join(docs, "assets"));
  const stylesheets = assets.filter((file) => file.endsWith(".css"));
  assert.ok(stylesheets.length > 0);
  for (const file of stylesheets) {
    const css = await readFile(join(docs, "assets", file), "utf8");
    assert.doesNotMatch(css, /url\(["']?\/assets\//);
    for (const [, rawUrl] of css.matchAll(/url\(([^)]+)\)/g)) {
      const url = rawUrl.replace(/^["']|["']$/g, "");
      if (/^(data:|https?:)/.test(url)) continue;
      await access(resolve(docs, "assets", url));
    }
  }
});

test("campaign download and sharing script are included in the export", async () => {
  const card = await readFile(join(docs, "bluespan-2070.svg"), "utf8");
  assert.match(card, /James Bluespan 2070 campaign card/);
  const script = await readFile(join(docs, "campaign.js"), "utf8");
  assert.match(script, /https:\/\/manualalan\.github\.io\/James-Bluespan-Campaign\//);
  await access(join(docs, ".nojekyll"));
  await access(join(docs, "kalahooska", "index.html"));
});
