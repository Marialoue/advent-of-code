var fs = require("fs");

var content = fs
  .readFileSync("./sonar-input.txt", "utf-8", (err) => {
    if (err) return err;
  })
  .split("\n");

// let example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let counter = 1;

for (let index = 0; index < content.length; index++) {
  const element = content[index];
  let next = content[index + 1];

  if (element < next) {
    counter++;
    console.log(element, " -- ", next, " increased");
  } else if (element > next) {
    next = element;
    console.log(element, " -- ", next, " de");
  }
}

console.log(counter);
