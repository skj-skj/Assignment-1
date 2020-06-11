console.log("\nQ4 - Start");

/*
 Create a function that takes a number as an argument.
 Add up all the numbers from 1 to the number you passed to the function.
 For example, if the input is 4 then your function should return 10
 because 1 + 2 + 3 + 4 = 10.
*/

function addUp(number){

    if(number>1000 || number < 0){
        return "enter positive number between 1 and 1000."
    }


    let addUpTotalNumber = 0;
    for(let i = 1;i<=number;i++){
        addUpTotalNumber += i;
    }
    return addUpTotalNumber;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

/*
Expected Output:

addUp (4) ➞   10
addUp (13) ➞  91
addUp (600) ➞ 180300
*/
console.log("\nQ4 - End");