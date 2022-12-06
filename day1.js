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

  function findBiggestValue(array) {
    let biggestValueOfCalories = 0;
    let indexOfBiggestValue = 0;

    array.forEach((element, index) => {
      if (element > biggestValueOfCalories) {
        biggestValueOfCalories = element;
        indexOfBiggestValue = index;
      }
    });
    array.splice(indexOfBiggestValue, 1);
    return biggestValueOfCalories;
  }
  let finallSum = 0;
  for (let counter = 0; counter < 3; counter++) {
    finallSum += findBiggestValue(arrayWithSumedCalories);
  }
  console.log(finallSum);
});
