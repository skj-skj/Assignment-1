console.log("\nQ5 - Start");

/*
Create a function that takes a string and replaces the vowels with another
character.
a = 1, e = 2, i = 3, o = 4, u = 5
*/

//Used Regular Expression and Method Chaining
function replaceVowel(word){
    word = word.toLowerCase();
    return word
            .replace(/a/g,"1")
            .replace(/e/g,"2")
            .replace(/i/g,"3")
            .replace(/o/g,"4")
            .replace(/u/g,"5");
    
}

console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));
console.log(replaceVowel("Bharat"));

/*
Expected Output:

replaceVowel("karachi") ➞   "k1r1ch3"
replaceVowel("chembur") ➞   "ch2mb5r"
replaceVowel("khandbari") ➞ "kh1ndb1ri"
replaceVowel("Bharat") ➞    "Bh1r1t"
*/
console.log("\nQ5 - End");