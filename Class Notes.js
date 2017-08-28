/* Week 1 - Monday
// - JS Review 
// - functions
// - arrays
// - hoisting

// What is a function for?
// - reuse

// encapsulation-structure

//function declaration 
function name(params) { // name parameter or local variable
    
}

//function expression
// creates an unnamed function assigned to a variable
var name = function(params) {

}

// when passing parameters into a function they're called arguments

// takes an array and logs out each value of the array
function logArray(anyArray) {
    console.log('inside logArray', anyArray);
    // for loop through anyArray
    for (var i = 0; i < anyArray.length; i++) {
        var element = anyArray[i];
        console.log('i | element ->', i, element);
    }
    return anyArray
}

// return creates a value, but doesn't store it, but it does allow it to be handed to other functions or variables

// call log Array
var arrayBack = logArray(['red', 'yellow', 'green', 'blue', 'purple']);
*/

var colors = ['red', 'yellow', 'green', 'blue', 'purple'];
console.log('colors ->', colors);

colors.push('white');

// push returns the new length of the array
// pop returns the item that was removed

// shift - add to front of array
// unshiftc - remove from front of array
// push - add to end of array
// pop - remove from end of array
// splice - add/remove from middle of array


// Hoisting - when lines of code are used out of their chronological order.
// code on line 4 might be hoisted above line 2
