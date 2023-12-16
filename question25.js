/*Create a function that will handle simple math 
expressions. The input is an expression in the form of a string*/
function handleMathExpression() {
    try {
      return eval();
    } catch (error) {
      console.error(error);
      return null;
    }
  }
console.log(eval("25 + 4" + 2))