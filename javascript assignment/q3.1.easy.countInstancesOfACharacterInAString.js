console.log("\nQ3 - Start");

/*
Create a function that takes two strings as arguments and returns 
the number of times the first string (the single character) is found in 
the second string.
*/

function charCount(str1,str2){
    var re = new RegExp(str1,"g"); //Used Regular Expression to solve this problem
    return str2.match(re).length;
}

console.log(charCount("a","edabit"));
console.log(charCount("c","Chamber of secrets"));
console.log(charCount("b","big fat bubble"));

/*
Expected Output:

charCount ("a", "edabit") ➞             1
charCount ("c", "Chamber of secrets") ➞ 1
charCount ("b", "big fat bubble") ➞     4

*/
console.log("\nQ3 - End");