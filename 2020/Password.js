// read from file
// add regex and map each line to that expression
// compare password to policy
// filter() valid password to result array or loop matches

const fs = require("fs");
const content = fs.readFileSync("./input-password.txt", "utf-8", (err) => {
  if (err) {
    console.log(err);
  }
});

const matches = content.split("\n").filter((line) => {
  const [array, min, max, character, password] = line.match(
    /^(\d+)-(\d+) (\S): (\S+)$/
  );

  // part 1
  // find number of times character appear in password within min and max range
  // const numOfCharMatch = password.split("").filter((char) => character == char).length;
  // console.log(numOfCharMatch, character);
  // return numOfCharMatch >= min && numOfCharMatch <= max;

  // part 2
  // find number of passwords where character is either/or in position min or max
  console.log(character, password[min-1], password[max-1]);
  return (password[min-1] == character) ^ (password[max-1] == character)
});

// const result = matches.filter(value => value).length;
// console.log(result);

let valid = 0;
for (let match in matches) {
  valid++;
}
console.log(valid);