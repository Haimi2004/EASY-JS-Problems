/**
  Create a function that takes two strings as arguments and return either true or false depending on whether the total number of 
  characters in the first string is equal to the total number of characters in the second string 
 */
function is_length_equal(str1, str2) {
    return str1.length === str2.length;
}
console.log(is_length_equal('iippp','iipp'))