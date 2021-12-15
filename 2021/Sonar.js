var fs = require("fs");

var content = fs
  .readFileSync("./sonar-input.txt", "utf-8", (err) => {
    if (err) return err;
  })
  .split("\n");

let counter = 1;

for (let i = 0; i < content.length; i++) {
  let item = content[i];
  let next = content[i + 1];

  if (item < next) {
    counter++;
  } else if (item > next) {
    next = item;
  }
}

console.log(counter);
