/*Write a function that takes an array of objects 
with keys name, age and email and return a sorted array of objects by age*/
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


function employeeAge(employeelist) {
    return employeelist.map(employeelist => {
      const age = employeelist.age ;
      return `${employeelist.age} `;
    });
  }
  console.log(employeeAge(employeelist))