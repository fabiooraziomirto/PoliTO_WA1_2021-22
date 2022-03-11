'use strict'

const string = ["Applications", "Computer", "Science", "Information", "Engineering", "Y", "It", "Cat"];

let newString = '';

string.forEach(word => {
    if(word.length > 3){
        newString += word.substring(0, 2);
        newString += word.substring(word.length - 2, word.length);
        newString += ' ';
    } else if (word.length < 2){
        newString += ' ';
    } else {
        newString += word.substring(0, 2);;
        newString += word.substring(word.length - 2, word.length);;
        newString += ' ';
    }
});

console.log(newString);
