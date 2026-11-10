// Vérifie le site exporté (dossier out/) : ancres, images, fichiers, traductions, mentions interdites.
import fs from "node:fs"; import path from "node:path";
const html = fs.readFileSync("out/index.html", "utf8");
let bad = 0; const fail = (m) => { console.log("✗", m); bad++; }; const ok = (m) => console.log("✓", m);

const ids = new Set([...html.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
const anchors = [...new Set([...html.matchAll(/href="#([^"]+)"/g)].map((m) => m[1]))];
anchors.filter((a) => !ids.has(a)).forEach((a) => fail(`ancre sans cible : #${a}`));
ok(`${anchors.length} ancres vérifiées`);

const srcs = new Set([...html.matchAll(/(?:src|href)="(\/[^"#]+\.(?:png|jpe?g|pdf))"/g)].map((m) => m[1]));
const bundle = fs.readdirSync("out/_next/static/chunks", { recursive: true }).filter((f) => String(f).endsWith(".js")).map((f) => fs.readFileSync(path.join("out/_next/static/chunks", String(f)), "utf8")).join("\n");
for (const m of bundle.matchAll(/["'`](\/images\/[^"'`]+\.(?:png|jpe?g)|\/CV_[^"'`]+\.pdf)["'`]/g)) srcs.add(m[1]);
for (const s of srcs) fs.existsSync("out" + s) ? null : fail(`fichier manquant : ${s}`);
ok(`${srcs.size} images/fichiers référencés présents`);

for (const lang of ["fr", "en"]) {
  const src = fs.readFileSync("src/content/projects.ts", "utf8") + fs.readFileSync("src/content/ui.ts", "utf8");
  const empty = (src.match(new RegExp(`${lang}: ""`, "g")) || []).length;
  empty ? fail(`${empty} chaînes ${lang} vides`) : ok(`aucune chaîne ${lang} vide`);
}
const all = html + bundle + fs.readFileSync("src/content/projects.ts", "utf8");
for (const w of ["Angular", "+212", "696"]) all.includes(w) ? fail(`mention à éviter : ${w}`) : ok(`absent : ${w}`);
fs.existsSync("out/images/bp-talent-360") ? fail("captures BP TALENT présentes dans out/") : ok("aucune capture BP TALENT 360 dans le build");
process.exit(bad ? 1 : 0);
