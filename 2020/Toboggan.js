// read from file
// split into array
// def x and y positions to move through forest
// count trees (#)

const fs = require("fs");
const content = fs.readFileSync("./toboggan-input.txt", "utf-8", (err) => {
  if (err) return err;
});

const forest = content.split("\n");

const result = () => {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  let totalTrees = 1;

  for (let slope of slopes) {
    const [right, down] = slope;
    totalTrees *= findTrees(right, down);
  }
  return totalTrees;
};

const findTrees = (moveRight, moveDown) => {
  let x = 0;
  let y = 0;
  let endOfForest = forest.length;
  let forestWidth = forest[0].length;
  let numOfTrees = 0;

  for (y; y < endOfForest; y += moveDown) {
    // for every moveDown check if there is a tree in that position
    // and begin next row if x is out of bounds ([x % forest[0].length])
    if (forest[y][x % forestWidth] === "#") {
      numOfTrees++;
    }
    x += moveRight;
  }
  console.log("num of trees: ", numOfTrees);
};

console.log(result());
