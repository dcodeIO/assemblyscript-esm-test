const assemblyscript = require("assemblyscript");
const loader = require("assemblyscript/lib/loader");
const rtrace = require("assemblyscript/lib/rtrace");
const asc = require("assemblyscript/cli/asc");
const options = require("assemblyscript/cli/util/options");
const ascDist = require("assemblyscript/dist/asc");

console.log(typeof assemblyscript === "object" && typeof assemblyscript.compile === "function");
console.log(typeof loader === "object" && typeof loader.instantiate === "function");
console.log(typeof rtrace === "object" && typeof rtrace.Rtrace === "function");
console.log(typeof asc === "object" && typeof asc.main === "function");
console.log(typeof options === "object" && typeof options.parse === "function");
console.log(typeof ascDist === "object" && typeof ascDist.main === "function");
