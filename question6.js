// generates a random number between a given minimum and maximum value
function getRndInteger(max, min) {
    return Math.floor(Math.random() * (max - min) ) + min;}
    console.log(getRndInteger(5,3))