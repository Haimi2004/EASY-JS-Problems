/* Write a function that takes an array of objects with keys name, age and email and return a new array of string with the following format:
 'name is age years old and has email'*/

const employeelist = [
    { name: "Wako", age: 51, email:"wk@gmail.com"  },
    { name: "Kevin", age: 43, email:"kaa@gmail.com"  },
    { name: "Bilu", age: 16,  },
    { name: "Ketti", age: 58, email:"keti@gmail.com"  },
    { name: "Nega", age: 68, email:"nega@gmail.com"  },
    { name: "Tola", age: 78, email: ""},
    { name: "Bula", age: 33, email:"bula@gmail.com"  },
    { name: "Deme", age: 17, email:"dema@gmail.com"  },
  ];
 
  function formatEmployeelist(arr) {
    return arr.map((obj) => `${obj.name} is ${obj.age} years old and has ${obj.email}`);
  }
  console.log(formatEmployeelist(employeelist))
  

  

  