function sortByLength(strs) {
    
    function createWordLength(word) {
   let wordObject = {};
   wordObject[word] = word.length;
   return wordObject;
   };

   
    let strObjectArray = [];
   
    for (let i=0; i<strs.length; i++) {
        let str = strs[i]; 
        strObjectArray.push(createWordLength(str));
    }; 
    return strObjectArray;
}



// /**
// * Test Suite 

describe('sortByLength()', () => {
   it('sorts the strings from shortest to longest', () => {
       // arrange
       const strs = ["abc", "", "aaa", "a", "zz"];
       
       // act
       const result = sortByLength(strs);

       // log
       console.log("result: ", result);
       
       // assert
       expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
   });
});



