
/*write a function that adds default value of "unknown" 
to the object if the name key is not present or if
 the value of the name key is empty, undefined or null*/
 /*let dog = {
    name: "dog",
    age: undefined,
    color: undefined,
    isMale: true,
    isFemale: false,
    
  };
  for (let key in dog) {
    if (dog[key] === undefined) {
      dog[key] = "unknown";
    }
  }
  console.log(dog);

  console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
*/
let person = { 
    Name: 'Wako',
    Age: 34, 
    email: 'wako@example.com',
    Sex : 'male',
    Address : 'Maryland' 
    }; 
    
    


function addDefaultValueToObject(person) {
    if (!obj.hasOwnProperty('name') || obj.name === '' || obj.name === undefined || obj.name === null) {
      obj.name = 'unknown';
    }
    return obj;
  }
  console.log(addDefaultValueToObject.keys(person));

