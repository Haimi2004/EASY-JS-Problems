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



  const sortByLongestName = (employeelist) =>
  employeelist.sort((a, b) => {
    if (a.name.legth > b.name.length) {
      return 1;
    }
    if (b.name.length > a.name.length) {
      return -1;
    }
    return 0;
  })[employeelist.length - 1];
console.log(sortByLongestName(employeelist));