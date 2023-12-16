/*Write a function that counts the number of vowels (a, e, i, o, u) in a string.*/
/*This could also be solved using .replace() 
method by replacing anything that isn't a vowel with an empty string 
(basically it will delete those characters) and returning the new string length:
*/
function vowelCount(str) {
    return str.replace(/[^aeiou]/gi, "").length;
  }
  console.log(vowelCount('jhjkdhiiunnyuyiulllkooo'))