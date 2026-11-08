const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { execFileSync } = require("node:child_process");

const root = __dirname;
const output = path.join(root, "public");
const assets = path.join(output, "assets");
const pages = ["index.html", "menu.html", "buscador.html", "reservas.html"];

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(assets, { recursive: true });

for (const page of pages) {
  fs.copyFileSync(path.join(root, page), path.join(output, page));
}

const temporaryCss = path.join(assets, "tailwind.css");
execFileSync(
  process.execPath,
  [
    require.resolve("tailwindcss/lib/cli.js"),
    "-c", "tailwind.config.js",
    "-i", "tailwind.input.css",
    "-o", path.relative(root, temporaryCss),
    "--minify"
  ],
  { cwd: root, stdio: "inherit" }
);

const css = fs.readFileSync(temporaryCss);
const hash = crypto.createHash("sha256").update(css).digest("hex").slice(0, 12);
const versionedName = `tailwind.${hash}.css`;
fs.renameSync(temporaryCss, path.join(assets, versionedName));

for (const page of pages) {
  const destination = path.join(output, page);
  const html = fs.readFileSync(destination, "utf8");
  fs.writeFileSync(
    destination,
    html.replaceAll("/assets/tailwind.generated.css", `/assets/${versionedName}`)
  );
}
