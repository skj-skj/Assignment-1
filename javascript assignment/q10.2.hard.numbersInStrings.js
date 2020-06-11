console.log("\nQ10 - Start");

/*
Create a function that takes an array of strings and returns an array with 
only the strings that have numbers in them. 
If there are no strings containing numbers, return an empty array.
*/

function numInStr(arrayOfStrings){
    let stringsThatHaveNumber = arrayOfStrings.filter( function (element){
        if(element.includes("0") || element.includes("1")|| element.includes("2")
        || element.includes("3") || element.includes("4")|| element.includes("5")
        ||element.includes("6") || element.includes("7")|| element.includes("8")
        || element.includes("9")
        ){
            return true;
        }
    });
    return stringsThatHaveNumber;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr (["abc", "abc10"]));
console.log(numInStr (["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr (["this is a test", "test1"]));

/*
Expected Output:

numInStr (["1a", "a", "2b", "b"]) ➞           ["1a", "2b"]
numInStr (["abc", "abc10"]) ➞                 ["abc10"]
numInStr (["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
numInStr (["this is a test", "test1"]) ➞      ["test1"]
*/
console.log("\nQ10 - End");