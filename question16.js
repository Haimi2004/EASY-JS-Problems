//Create a function that takes an array of numbers and filters out negative numbers
let numbers=[3, 7, -9, 90, 44, -6, -9, 8];
numbers = numbers.filter(function(x)
{ return x > -1 }
)
console.log(numbers)