import assemblyscript from "assemblyscript";
import loader from "assemblyscript/lib/loader";
import rtrace from "assemblyscript/lib/rtrace";
import asc from "assemblyscript/cli/asc";
import options from "assemblyscript/cli/util/options";
import ascDist from "assemblyscript/dist/asc";

console.log(typeof assemblyscript === "object" && typeof assemblyscript.compile === "function");
console.log(typeof loader === "object" && typeof loader.instantiate === "function");
console.log(typeof rtrace === "object" && typeof rtrace.Rtrace === "function");
console.log(typeof asc === "object" && typeof asc.main === "function");
console.log(typeof options === "object" && typeof options.parse === "function");
console.log(typeof ascDist === "object" && typeof ascDist.main === "function");
