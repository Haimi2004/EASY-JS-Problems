//Write a function that takes an object as an argument and returns an array of all the keys present in the object.
   
    // Returning enumerable properties 
// of an array like object. 
let person = { 
Name: 'Wako',
Age: 25, 
email: 'wako@example.com',
Sex : 'male',
Address : 'Maryland' 
}; 
console.log(Object.keys(person));
