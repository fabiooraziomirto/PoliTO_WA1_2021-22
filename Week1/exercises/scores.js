'use strict';

//let a = 5;
//let b = 'hello';
// 5 and 'hello' are literal because it don't change, it is always a string or a number
// primitive values are literal
// complex type are not
// literal any value that doesn't change, it is always the same
// const obj = {name: "Luigi"}; // object literal

const score = [25, 30, 18, 27, 28, 27, 30, 26]; // remove 25 and 18, array literal
const betterScore = [... score];

// delete the two lowest-ranking scores

let minScore = Math.min(... betterScore);
let index = betterScore.indexOf(minScore);
betterScore.splice(index, 1);

minScore = Math.min(... betterScore);
index = betterScore.indexOf(minScore);
betterScore.splice(index, 1);

// Alternarive: sort + deletion
/*betterScore.sort(function(a, b){
    return a - b;
});*/
/*betterScore.sort((a, b) => a - b); 
betterScore.shift();
betterScore.shift();*/

// compute the average
let avg = 0;
for(const s of betterScore){
    avg += s;
}
avg /= betterScore.length;

// round the average
avg = Math.round(avg);

// add the average to the betterScore array
betterScore.push(avg);
betterScore.push(avg);


console.log(score);
console.log(betterScore);