console.log("\nQ2 - Start");

/* 
Given two integers, a and b, return true if a can be divided evenly by b.
Return false otherwise.
*/

function dividesEvenly(a,b){
    return (a%b == 0)?true:false;
}

console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));

/*
Expected Output:

dividesEvenly(98,7) ➞ true
dividesEvenly(85,4) ➞ false
*/
console.log("\nQ2 - End");