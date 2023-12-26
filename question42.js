/*  Write a function that takes an array of objects with keys name, age and email 
and return the average age of all the people*/

const employeelist = [
    { name: "Wako", age: 51, email:"wk@gmail.com"  },
    { name: "Kevin", age: 43, email:"kaa@gmail.com"  },
    { name: "Bilu", age: 16, email:"billu@gmail.com" },
    { name: "Ketti", age: 58, email:"keti@gmail.com"  },
    { name: "Nega", age: 68, email:"nega@gmail.com"  },
    { name: "Tola", age: 78, email:"tola@gmail.com" },
    { name: "Bula", age: 33, email:"bula@gmail.com"  },
    { name: "Deme", age: 17, email:"dema@gmail.com"  },
  ];
  
  const aveAge = (arr) =>
  arr.reduce((sum, person) => sum + Number(person.age), 0) / arr.length;
console.log(aveAge(employeelist));
 