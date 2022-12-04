function panic(input){
    return String(input).toUpperCase().split(' ').join(' 😱 ') + "!";
}
console.log(panic('Hello'));