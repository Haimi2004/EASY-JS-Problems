const employeelist = [
    { name: "Wako", age: 51, email:"wk@gmail.com"  },
    { name: "Kevin", age: 43, email:"kaa@gmail.com"  },
    { name: "Bilu", age: 16,  },
    { name: "Ketti", age: 58, email:"keti@gmail.com"  },
    { name: "Nega", age: 68, email:"nega@gmail.com"  },
    { name: "Tola", age: 78, email: ""},
    { name: "Bula", age: 33, email:"bula@gmail.com"  },
    { name: "Gebre TesfaGizaw", age: 17, email:"dema@gmail.com"  },
  ];



function getLongestName(employeelist) {
    let longestName = "";
    for (let i = 0; i < name.length; i++) {
      if (employeelist[i].name.length > longestName.length) {
        longestName = employeelist[i].name;
      }
    }
    return longestName;
  }
  console.log(getLongestName(getLongestName))