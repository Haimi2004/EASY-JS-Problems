/*Write a function that calculates the sum of the digits of a positive integer.*/ 
//In this approach we are using Math.floor function
//we calculate sum by repeatedly adding last digit using remainder of 10 and updating number by division, until it’s 0.

function sumOfDigits(num) { 
	let sum = 0; 
	for (; num > 0; num = Math.floor(num / 10)) { 
		sum += num % 10; 
	} 
	return sum; 
} 

console.log(sumOfDigits(456));

