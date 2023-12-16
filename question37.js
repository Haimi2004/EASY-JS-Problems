/*Write a function that takes in two parameters and calculates the sum of numbers between the two paramenters*/

function sumBetween(min, max) {
    let sum = 0;
    for (let i = min ; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(sumBetween(0,2))