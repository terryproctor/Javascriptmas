
/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but practice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, [[99, [76, [[101,66,89,702], 102]]], 89], 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

function flatten(arr){
    let newArr = [];
    arr.forEach(myFunction);
    
    function myFunction(item) {
        if (typeof(item) != 'object'){
            newArr.push(item);
            //console.log(item);
        } else {item.forEach(myFunction)};
    }
    return newArr;
}
 //flatten(kittyPrizes);
console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
