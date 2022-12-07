/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let str_array = str.split('');
    let new_str_array = [];
 
    for (let i = 0; i < str_array.length; i++){
        if (i%2 == 0) {
            new_str_array.push(str_array[i].toUpperCase());     
        }
        else {
            new_str_array.push(str_array[i]);   
        }  
    }
    let newStr = new_str_array.join('');
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));