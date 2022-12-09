/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/


function capitalizeWord(word){
    let titleCaseWord = word.slice(0,1).toUpperCase() + word.slice(1);
    return titleCaseWord;
}


/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    let strWordsArr = str.split(" ");
    for (let i = 0; i < strWordsArr.length; i++) {
        strWordsArr[i] = capitalizeWord(strWordsArr[i]);
    };
    return strWordsArr.join(" ");        
    
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));