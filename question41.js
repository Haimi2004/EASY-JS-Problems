/*a function that takes an array of objects with keys name, age and email and return the sum of all the ages*/
 
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


  var sum=0;
  for(var i=0;i<employeelist.length; i++) {
      sum+= employeelist[i].age;
  }

 console.log(sum)
  
  