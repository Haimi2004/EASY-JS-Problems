/*Write a function that takes in two parameters and calculates the sum of numbers between the two paramenters*/

const sumBetween = (num1, num2)=>{
let smallNumber= num2>num1?num1:num2 ;
let largeNumber=num2>num1?num2:num1 ;
   let arr = [];

    for (var i =smallNumber; i <= largeNumber; i++) {
      arr.push(i);
    }
    return arr.reduce((s, c)=> s+c);
  };
  console.log(sumBetween(2,0))