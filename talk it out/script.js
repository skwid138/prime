//1. Start with the number 42 and set that equal to the variable `majorKey`
var majorKey = 42;

// 2. Create conditional logic to check if `majorKey` is greater than or equal to 53
if(majorKey >= 53){
// 2-1. If true, add 42 to `majorKey`
majorKey += 42;
} else{
// 2-2. If false, subtract 13 from `majorKey`
majorKey -= 13;
}
console.log('majorKey ->', majorKey); // expect 29


// 3. Add a string with a value of 11 to `majorKey`
majorKey += '11';
console.log('majorKey ->', majorKey); // expect "2911"

// 4. Create an array named `keyChars`, then loop through `majorKey` using the `charAt` method and set `keyChars[i]` to each value
var keyChars = [];
for (i = 0; i < majorKey.length; i++) {
    keyChars[i] = majorKey.charAt([i]);
}
console.log('keyChars -> ',keyChars); // expect ["2","9","1","1"]

// 5. Remove the first and last values from `keyChars`
keyChars.pop();
console.log('keyChars -> ', keyChars); // expect ["2","9","1"]

keyChars.shift();
console.log('keyChars -> ', keyChars); // expect [9","1"]

// 6. Create a new variable. Loop **backwards** through `keyChars` and store each value into the new variable, combining each of the values of `keyChars`
var backwards = '';
console.log('keyChars.length ->', keyChars.length)
for (i = keyChars.length- 1; i >= 0; i--) {
   // console.log('i ->', i);
   // console.log('keyChars[i] ->', keyChars[i]);
    backwards += keyChars[i];
}
console.log('backwards ->', backwards);

// 7. `parseInt` both the `majorKey` and the new variable created in Step 6, ensure that both `majorKey` and the new variable are set to these new parsed values.
console.log('majorKey ->', majorKey);
majorKey = parseInt(majorKey);
console.log('majorKey ->', majorKey);

console.log('backwards ->', backwards);
backwards = parseInt(backwards);
console.log('backwards ->', backwards);


// ******* SWITCH PROGRAMMERS *******

// 8. Add `majorKey` and the new variable created in Step 6 together and store them in `majorKey`
majorKey += backwards;
console.log("majorKey =>" + majorKey)

// 9. If the new value of `majorKey` is less than 60, set `majorKey` equal to 14. If not, check to see if it is equal to 2930, if it is, set `majorKey` equal to 27.
// If neither of these are true, set `majorKey` to 2.

if(majorKey < 60){
    majorKey = 14;
} else if (majorKey === 2930) {
    majorKey = 27;
} else {
    majorKey = 2;
}

console.log('majorKey -> '+ majorKey); //expect 27
// 10. Create a while loop that counts down from 10 and increments `majorKey` by 1.

var i = 10
while(i >= 1){
    i--;
    majorKey += 1;
}
console.log('majorKey ->' + majorKey); // expect 37
// 11. Create a function that accepts an argument `val`. The function should convert `val` to a string, then drop the first character off the string, but only if there
// is more than one character in the string. Return `val` and set `majorKey` to the returned value.
function convertString(val) {
    val = val.toString();
        if (val.length > 1){
            val = val.slice(1)
        } 
    return val;
}

// 12. Call the function.
majorKey = convertString(majorKey);
// 13. Console log `majorKey`. 
console.log('majorKey ->' + majorKey);
// 14. Create an index.html file, link in this JavaScript file. Load in the browser and check the value from Step 13.

// 15. Your answer should be a string value that equals 7. Is that what you got?

// console.log(convertString('hello'));