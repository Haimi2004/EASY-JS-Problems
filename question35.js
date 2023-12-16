/*  A typical car can hold four passengers and one driver, 
allowing five people to travel around. Given n number of people,
 return how many cars are needed to seat everyone comfortably.*/
 
 function calculateCars(n) {
    const passengersPerCar = 5;
    const carsRequired = Math.ceil(n / passengersPerCar);
    return carsRequired;
  }
  console.log(calculateCars(27))