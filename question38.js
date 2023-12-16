/* Write a function that takes an array of objects with keys name, age and email and remove any object that does not have an email*/
const employeelist =[
    {name:"Waqqo", age:51, email:"email@hotmail.com"},
    {name:"Kevin", age:43, email:"email@hotmail.com"},
    {name:"Bilu", age:63, email:""},
    {name:"Ketti", age:53, email:"email@hotmail.com"},
    {name:"Nega", age:39, email:"email@hotmail.com"},
    {name:"Tola", age:33, email:""},
    {name:"Bula", age:23, email:"email@hotmail.com"},
];


function removeObjectsWithoutEmail(employeelist) {
    return employeelist.filter(obj => obj.email);
  }
console.log(removeObjectsWithoutEmail(email))