const fs = require("fs");

fs.readFile("./input_01.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split(/\r?\n/);

  let sum = 0;

  const arrayWithSumedCalories = arr.reduce((accumulator, currentValue) => {
    if (!(currentValue.length === 0)) {
      let currentValueNumber = parseInt(currentValue);
      sum += currentValueNumber;
    } else {
      let sumOfCalories = sum;
      sum = 0;
      return [...accumulator, sumOfCalories];
    }
    return accumulator;
  }, []);

  const sumOfCaloriesSorted = arrayWithSumedCalories.sort();
  const sumOfCaloriesSortedAndReversed = sumOfCaloriesSorted.reverse();

  console.log(
    sumOfCaloriesSortedAndReversed[0] +
      sumOfCaloriesSortedAndReversed[1] +
      sumOfCaloriesSortedAndReversed[2]
  );
});
