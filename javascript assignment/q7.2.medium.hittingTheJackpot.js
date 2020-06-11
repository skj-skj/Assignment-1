console.log("\nQ7 - Start");

/*
Create a function that takes in an array (slot machine outcome) and 
returns true if all elements in the array are identical, and false otherwise. 
The array will contain 4 elements.
*/

function testJackpot(jackpotArray){
    for(let i = 0; i<jackpotArray.length-1; i++){
        if(jackpotArray[i] !== jackpotArray[i+1]){
            return false;
        }
    }
    return true;
}

console.log(testJackpot (["@", "@", "@", "@"]));
console.log(testJackpot (["abc", "abc", "abc", "abc"]));
console.log(testJackpot (["SS", "SS", "SS", "SS"]));
console.log(testJackpot (["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot (["SS", "SS", "SS", "Ss"]));

/*
Expected Output:

testJackpot (["@", "@", "@", "@"]) ➞         true
testJackpot (["abc", "abc", "abc", "abc"]) ➞ true
testJackpot (["SS", "SS", "SS", "SS"]) ➞     true
testJackpot (["&&", "&", "&&&", "&&&&"]) ➞   false
testJackpot (["SS", "SS", "SS", "Ss"]) ➞     false
*/
console.log("\nQ7 - End");