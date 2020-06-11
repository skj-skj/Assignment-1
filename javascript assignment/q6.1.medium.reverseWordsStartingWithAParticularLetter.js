console.log("\nQ6 - Start");

/*
 Write a function that reverses all the words in a sentence that start with
 a particular letter.
 */

function specialReverse(sentence,letter){
    let words = sentence.toLowerCase().split(' '); //Extracting all words and storing in array
    for(let i = 0; i<words.length; i++){
        if(words[i][0] == letter){ //Checking the first character of word with the letter passed
            words[i] = words[i].split('').reverse('').join(''); // Reversing the String
        }
    }
    return words.join(' ');
}

console.log(specialReverse("word searches are super fun","s"));
console.log(specialReverse("first man to walk on the moon","m"));
console.log(specialReverse("peter piper picked pickled peppers","p"));
console.log(specialReverse("It is weird madam","m"));

 /*
Expected Output:

specialReverse ("word searches are super fun", "s") ➞ 
                            "word sehcraes are repus fun"

specialReverse ("first man to walk on the moon", "m") ➞ 
                            "first nam to walk on the noom"

specialReverse ("peter piper picked pickled peppers", "p") ➞ 
                            "retep repip dekcip delkcip sreppep"

specialReverse ("It is weird madam", "m") ➞ 
                            "It is weird madam"
*/
console.log("\nQ6 - End");