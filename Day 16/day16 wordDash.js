function insertDashes(arr) {
    // write code here
    let words = arr.split(' ');
    let new_words = words.map(word => word.split('').join('-'));
    return new_words.join(' ');
    
}
