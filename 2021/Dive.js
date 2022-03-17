const fs = require("fs");
const content = fs.readFileSync(
  "dive-input.txt",
  { encoding: "utf-8" },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);

const commands = content
  .split("\n") // split input on new line
  .filter((x) => Boolean(x)) // return array with only lines containing value i.e no empty lines, only truthy lines - same as .filter(Boolean)
  .map((line) => {
    // map each line to a direction and a speed, push into new array
    let arr = [];
    let [direction, speed] = line.split(" ");
    arr.push(direction, parseInt(speed));
    return arr;
  });

const steerSubmarine = (commands) => {
  let horizontal = 0;
  let depth = 0;
  // for each command in array of commands, use switch to see which direction we are going
  // adjust for that direction
  for (const command of commands) {
    switch (command[0]) {
      case "forward":
        horizontal += command[1];
        break;
      case "up":
        depth -= command[1];
        break;
      case "down":
        depth += command[1];
        break;
      default:
        break;
    }
  }
  // result is depth * horizontal
  return depth * horizontal;
};

const resultPartOne = steerSubmarine(commands);
console.log(resultPartOne);
