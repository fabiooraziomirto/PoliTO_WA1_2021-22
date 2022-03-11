/* Strange JS behaviors and where to find (some of) them */
'use strict';

const type = typeof NaN;
console.log('NaN is a ' + type);
console.log(`NaN === NaN? ${NaN === NaN}\n`); //NaN is not equal to everything, so all NaN == X is always false

console.log(`null == false? ${null == false}`); // == convert the element in a number so in this case -> null is not equal to everything even if
                                                    // we have null, NaN and undefined
                                                
console.log(`'' == false? ${'' == false}`); // true
console.log(`3 == true? ${3 == true}\n`);   // false because == convert the element in a number
                                            // true is convert to 1 and false is convert to 0

console.log(`true + true = ${true + true}`); // 2 because == convert the element in a number and true is equal to 1
console.log(`true !== 1? ${true !== 1}`);    // true

console.log(`5 + '10' = ${5 + '10'}\n`);     // 510 as a string

console.log(`1 < 2 < 3? ${1 < 2 < 3}`);      // true
console.log(`3 > 2 > 1? ${3 > 2 > 1}\n`);    // false because 3 > 2 is 1 and 1 > 1 is false

console.log(`0.2 + 0.1 === 0.3? ${0.2 + 0.1 === 0.3}\n`); // false calculation on floating point is not precise

console.log('b' + 'a' + + 'a' + 'a'); //ba NaN a