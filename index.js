let lobj = {};
let root;
let proc = str => {
  if (str.split("\n").length != 1) {
    str.split("\n").forEach(line => proc(line));
    return;
  }
  curr = str.split(" ");
  switch ( curr[0] ) {
    case "root":
      root = curr[1];
      break;
    case "set":
      itm = perform(curr[1]);
      if (!curr[2]) {
        itm = {};
        break;
      }
  }
}