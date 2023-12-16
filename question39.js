/*Write a function that takes an array of objects with keys name, age and email and return a message that says
"hi name, we have sent sent a conformation email to your email adddress" for each object*/
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


  const newArr = employeelist.map((employeelist) => {
    return `hi ${employeelist.name}, we have  sent a conformation email to your email adddress`;
  });
  console.log(newArr)