/* 28.  A bartender is writing a simple program to determine 
whether he should serve drinks to someone. He only serves
 drinks to people 18 and older and when he's not on break. 
 Given the person's age, and whether break time is in session, 
 create a function which returns whether he should serve drinks."
 */

function serve_drinks(age, is_break_time) {
    return age >= 18 && !is_break_time;
}
console.log(serve_drinks(12,false))