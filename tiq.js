const f = require("fs");
const i = require("./index");
console.log(i.proc(f.readFileSync("main.set")));