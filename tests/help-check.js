/*
 * Input-help coverage check: every input and select on every calculator page
 * must map to a defined help entry, every mapped key must exist, and every
 * sketch must build without error. Run: node tests/help-check.js
 */
var fs = require("fs"), path = require("path");
var root = path.join(__dirname, "..");
global.window = {};
require(path.join(root, "js/help.js"));
fs.readdirSync(path.join(root, "help")).filter(function (f) { return /^defs-.*\.js$/.test(f); })
  .sort(function (a, b) { return a === "defs-common.js" ? -1 : b === "defs-common.js" ? 1 : a.localeCompare(b); })
  .forEach(function (f) { require(path.join(root, "help", f)); });
var H = window.IDMHelp, fail = 0, pass = 0;
function bad(m) { fail++; console.log("FAIL " + m); }

["alignment", "cross-section", "intersections", "roadside"].forEach(function (sec) {
  fs.readdirSync(path.join(root, sec)).filter(function (f) { return f !== "index.html" && /\.html$/.test(f); }).forEach(function (f) {
    var key = sec + "/" + f, html = fs.readFileSync(path.join(root, sec, f), "utf8");
    if (html.indexOf("js/help.js") < 0) bad(key + " does not load js/help.js");
    if (html.indexOf("help/defs-" + sec + ".js") < 0) bad(key + " does not load help/defs-" + sec + ".js");
    var m = H.map[key] || {};
    var ids = [], re = /<(?:input|select)[^>]*\bid="([^"]+)"/g, x;
    while ((x = re.exec(html))) ids.push(x[1]);
    ids.forEach(function (id) {
      var v = m[id];
      if (!v) return bad(key + " #" + id + " has no help entry");
      var k = Array.isArray(v) ? v[0] : v;
      if (!H.defs[k]) return bad(key + " #" + id + " maps to undefined key " + k);
      pass++;
    });
    Object.keys(m).forEach(function (id) { if (ids.indexOf(id) < 0) bad(key + " map has #" + id + " but the page has no such input"); });
  });
});

var withSketch = 0;
H.order.forEach(function (k) {
  var d = H.defs[k];
  ["title", "group", "what"].forEach(function (f) { if (!d[f]) bad(k + " missing " + f); });
  if (!d.cite && !d.notIDM) bad(k + " has neither cite nor notIDM");
  if (H.GROUPS.map(function (g) { return g[0]; }).indexOf(d.group) < 0) bad(k + " unknown group " + d.group);
  if (typeof d.sketch === "function") {
    try {
      var s = d.sketch(H.S);
      if (!/^<svg class="sk"/.test(s)) bad(k + " sketch does not start with <svg class=\"sk\"");
      if (/NaN|undefined/.test(s)) bad(k + " sketch contains NaN/undefined");
      withSketch++;
    } catch (e) { bad(k + " sketch threw: " + e.message); }
  }
});
var used = {};
Object.keys(H.map).forEach(function (p) { Object.keys(H.map[p]).forEach(function (id) { var v = H.map[p][id]; used[Array.isArray(v) ? v[0] : v] = 1; }); });
H.order.forEach(function (k) { if (!used[k]) console.log("NOTE " + k + " is defined but not used on any page"); });

console.log("\n" + pass + " inputs mapped, " + H.order.length + " definitions (" + withSketch + " with sketches), " + fail + " failed");
process.exit(fail ? 1 : 0);
