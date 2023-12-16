/*  Create a function that takes a name and returns a greeting in the form of a string. 
Don't use a normal function, use an arrow function. 
Examples helloName("Gerald") ➞ "Hello Gerald!" 
helloName("Tiffany") ➞ "Hello Tiffany!" helloName("Ed") ➞ "Hello Ed!"*/
const person = {
  name: 'Alice',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};
