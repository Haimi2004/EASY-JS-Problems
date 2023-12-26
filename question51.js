/*Write a function that takes an array of objects
 with keys name, age and email and return a new 
 array of string with the following format: 
 'name is age years old and has email'. 
 If the person does not have an email, 
 the string should be 'name is age years old and has no email'*/

const employeelist = [
    { name: "Wako", age: 51, email:"wk@gmail.com"  },
    { name: "Kevin", age: 43, email:"kaa@gmail.com"  },
    { name: "Bilu", age: 16, email:""},
    { name: "Ketti", age: 58, email:"keti@gmail.com"  },
    { name: "Nega", age: 68, email:"nega@gmail.com"  },
    { name: "Tola", age: 78, email:"" },
    { name: "Bula", age: 33, email:"bula@gmail.com"  },
    { name: "Deme", age: 17, email:"dema@gmail.com"  },
  ];


function formatEmployeelist(employeelist) {
    return employeelist.map(employeelist => {
      const email = employeelist.email ? `has ${employeelist.email}` : 'has no email';
      return `${employeelist.name} is ${employeelist.age} years old and ${email}`;
    });
  }

  console.log(formatEmployeelist(employeelist));
  