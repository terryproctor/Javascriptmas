function countVowelConsonant(str) {
    let letters = str.split('');
    
    const vowels = ["a", "e", "i", "o", "u"];
    //check individual letter scores
    function checkScore(letter) {
        if (vowels.includes(letter)) {
            return 1;
        } else {return 2;
               }
    }

    
    const reducer = (sum, val) => sum + checkScore(val);
    const initialValue = 0;
  
    return letters.reduce(reducer, initialValue);
};  
  