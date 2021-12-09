// read data.txt
// save data to array
// parse to int
// find x + y = 2020

var fs = require("fs");
var content = fs
  .readFileSync("report-input.txt", "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  })
  .split("\n");
for (let i in content) {
  content[i];
}
console.log("File read, ex num:", content[0]);

let array = content.map((item) => parseInt(item, 10)); // could use Number() also
let sum = 2020;

const bruteForce = (array, sum) => {
  let result = [];
  for (let x in array) {
    for (let y in array) {
      for (let z in array) {
        if (array[x] + array[y] + array[z] === sum) {
          result.push([array[x], array[y], array[z]]);
          console.log([array[x] * array[y] * array[z]]);
        }
      }
    }
  }
  console.log("result: ", result);
  return;
};

bruteForce(array, sum);