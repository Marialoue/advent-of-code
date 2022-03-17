var fs = require("fs");

var content = fs
  .readFileSync("sonar-input.txt", "utf-8", (err) => {
    if (err) return err;
  })
  .split("\n")
  .map(Number);

let example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

// part 1
const compareDepthMeasurement = (allDepths) => {
  let countAllLargerMeasurements = 0;

  allDepths.map((measurment, i) => {
    if (measurment > allDepths[i - 1]) {
      countAllLargerMeasurements++;
    }
  });

  console.log(
    `There are ${countAllLargerMeasurements} measurements larger than the previous one`
  );
  return countAllLargerMeasurements;
};

compareDepthMeasurement(content);

// // part 2
const compareSumOfSlidingWindow = (allDepths) => {
  let sumOfSlidingWindow = 0;
  let slidingDepthsArray = [];

  // push sum of measurement to slidingDepthArray as long as there is a three-measurement sliding window ->
  // stop when there aren't enough measurements left to create a new three-measurement sum.
  allDepths.map((measurement, i) => {
    if (allDepths[i + 1] && allDepths[i + 2]) {
      slidingDepthsArray.push(
        measurement + allDepths[i + 1] + allDepths[i + 2]
      );
    }

    // add one to sumOfSlidingWindow (counter) when sum of measurement is more than the previous one
    if (slidingDepthsArray[i] > slidingDepthsArray[i - 1]) {
      sumOfSlidingWindow++;
    }

    return slidingDepthsArray;
  });
  console.log(
    `There are ${sumOfSlidingWindow} sums larger than the previous one`
  );
};

compareSumOfSlidingWindow(content);
