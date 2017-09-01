/* Week 1 - Friday */

// SPA - Single Page Application
// using made up words for testing can be a useful way to identify if tests are still running
// in jquery a getter collects information and a sender sends information
// .val() is a getter and as sender

/******************************************/
/* Live Solve Notes

root folder
- index.html
- scripts(dir)
    -- inventory.js
- vendors(dir)
    -- jQuery.js
- styles(dir)
    -- style.css


**inventory.js**
code comments

- global variable to store objects
var inventory = [];

- inventory item object constructor
function Item (sizeIn, colorIn, nameIn) {
    this.size = sizeIn;
    this.color = colorIn;
    this.name = nameIn;
    // adds newly created inventory objects to the array
    inventory.push( this ); 
}

function readyNow() {
    console.log('JQ');
    $('#addItemButton').on('click', addItem);
    $('#searchButton').on('click', searchNow);
} // end readyNow

function addItem() {
    // get user input
    // can wrap the jquery in console.log to check output individually before making the object
    // use input to create object(inventory item)
    new Item ( $('#nameIn').val( ), $('#sizeIn').val( ), ('#colorIn').val( ));
    // push item into array
    // reset input
    $('#nameIn').val( '' );
} // end addItem

function searchNow () {
    // get user input
    var sizeSearch = $('#sizeInSearch).val();
    var colorSearch = $('#colorInSearch).val();
    console.log('looking for', sizeInSearch, 'and', colorInSearch)
    // check for matches
    // our matches
    var matches = [];
    // loop through inventory array
    if (var i= o; i < inventory.length: i++) {
        console.log('checking:');
        // for each item check if size and color match (compound conditional)
        if ( inventory[ i ].size === sizeSearch && inventory[ i ].color === colorSearch ) {
            // both must be true
            console.log( 'match found' )
            // if match, push into matches array
            matches.push( inventory[ i ]);
        }
    }
    // return matches array
    console.log( 'matches: ', matches);
} // end searchNow

$(document).ready(readyNow);

**index.html**

// an article is often similar content or similarly formated content
// a section is usually different content which is displayed differently

// for the input dev prefers to use placeholder instead of  'name: ' followed by <input>

// <select></select> creates a drop down list (it has a lot more complex options you can do with it, like defaulting to a setting, etc.)
// within select <option></option> is used for each item in the list

// input and select are on the same lines unless there is a line break

<body>
    <header>
        <h1>Do You Have This</h1>
    </header>
    <main>
        <section id="addItemSection">
            <h2>Add New Item:</h2>
            <p><input type="text" placeholder="name goes here" id="nameIn"></p>
            <select id="sizeIn>
                <option>Tiny</option>
                <option>Small</option>
                <option>Med</option>
                <option>Large</option>
                <option>Huge</option>
            </select>
            <select id="colorIn>
                <option>Red</option>
                <option>Orange</option>
                <option>Yellow</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Violet</option>
            </select>
            <button id="addItemButton">Add Item</button>
        </section>
        <section id="searchSection>
            <h2>Search: </h2>
            <select id="sizeInSearch>
                <option>Tiny</option>
                <option>Small</option>
                <option>Med</option>
                <option>Large</option>
                <option>Huge</option>
            </select>
            <select id="colorInSearch>
                <option>Red</option>
                <option>Orange</option>
                <option>Yellow</option>
                <option>Green</option>
                <option>Blue</option>
                <option>Violet</option>
        </section>
        <button id="searchButton">Search</button>
    </main>
    <footer>
        <p>copyright 2017</p>
    </footer>
</body>




*/
/******************************************/
//Inventory App - Do you have this?(jQuery)

// - Object (inventory[])
// -- size (tiny, small, med, larger, huge [select])
// -- color (ROYGBV [select])
// -- name (string, [text])
// -Input (form "add")
// - search (choose size, choose color [drop downs])
// - "search" button
// return an array of all matches[]
// input and search will be sections of main in html

// Create Objects
// put objects in array
// get user input to create
// get user input to search
// returns search results


/* Week 1 - Thursday */

// live solve
// - should usually have an else to make sure nothing falls through the cracks
// - good idea to log the start of function and param(s) to make sure it's taking arguments
// - create variables for calc function set values to 0
// - create object that is equal to new variable values
// - can test again to make sure new object is being made with 0 values
// - should create first if then test, to confirm it's working before moving to next if
// - can log in each if/else when it evalutes true
// - Number() is similar to parseInt() except it wont make it a whole number
// - math.round will round down if it's evanNum.5 and up if it's oddNum.5
// - can use 'varName = false;' an if (varName) console.log(about something) to quickly clean up console and then change to error check later


// HTML and CSS - HTML and CSS folder
// - once you've made a decent css page(or two), just save it
// - typically use double quotes in markup and single in javascript
// -  with html 5 it's more common to have a header main and footer inside a body tag
// - using a % for an image will use the max size of it's parent container

//jQuery
// - "Vendors" is often a term used to refer to things sourced from someone else - such as jquery
// - a jQuery library is often put in a vendors dir
// $ = jQuery
// logging doc ready in your jquery function is a way to make sure the js file is loaded before the jquery is called
// - decsendants are elements, classes, or ids inside of a container
// $('div h2') for exaample
// - direct decsendents are elements, classes, and ids directly inside a container 
// $('div > h2') for example
// - to select multiple selectors use a comma to separate them
// $('div, h2') for example
// - you can also combine the above with decsendants and direct decsendants
// - $('something').children() shows all child elements
// - $('something').children().first() shows the first child element
// - $('something').parent() shows the elements above an element
// - you can chain as many methods together as you want
// - find is a good method to use
// - filter is also a good method
// - psuedo selectors are good to research





/* Week 1 - Wednesday */

// Taylor Time

// weekly assignments
// weekly mentoring (thursday evenings)
// must meetup with mentor every other week
// one person will create a new free slack channel for the mentor group
// after first meeting we need to schedule our own meetup
// avg 1-3 meetups a week
// javascript mn is a good meetup

// example questions for mentors
// - tell me about an amazing week
// - whats a bad week
// - how often are good vs bad
// - projects vs products
// - 

/* Week 1 - Tuesday */

// cmd space - in osx opens spotlight search

// terminal
// / - root
// pwd - print working directory
// ~ - home directory
// touch [file name] - creates a file
// cat - displaying them, combining copies of them and creating new ones
// rm -rf [file path] - removes a folder and everything in it (-rf recursive force)
// control c (^c) - quits terminal task (otherwise q is often used to exit)
// ls -a - lists files and hidden files
// man - can be added to commands to see how to use them
// mkdir - creates a directory

//git
// git push -u origin master (once you've done -u origin master you're 
// able to just push and it will default to the master branch)
// git checkout -- [file name] (lets you roll back before a commit and deletes any progress)
// if you want to rollback to a prior commit you can git log first and copy and paste the hash number
// git checkout master - brings you back to the master version
// mv [file name - from] [file name - to] - this can be used to rename a file or move it
// cp [file name - from] [file name - to] copies a file 
// .gitignore - https://help.github.com/articles/ignoring-files/  git will ignore these files
// git diff - Compare modified files
// git blame - Show what revision and author last modified each line of a file
// git stash - when you want to record the current state of the working 
// directory and the index, but want to go back to a clean working directory
// git pull - pulls current remote repo (https://stackoverflow.com/questions/3620633/what-is-the-difference-between-pull-and-clone-in-git)
// git clone - Clones a repository into a newly created directory, creates 
// remote-tracking branches for each branch in the cloned repository (visible using git branch -r), 
// and creates and checks out an initial 
// branch that is forked from the cloned repository's currently active branch.

// Object literal
console.log('js');

var lunchboxes =[];

var tempLunchbox = {
    size : 'medium',
    handle: true,
    color: 'blue',
    image: false
}; // end tempLunchbox

// constructor
function Lunchbox( sizeIn, handleIn, colorIn, imageIn ) { //usually use capital letter for first letter of constructors
    this.size = sizeIn;
    this.handle = handleIn;
    this.color = colorIn;
    this.image = imageIn;
}; // end Lunchbox Constructor

var otherLunchbox = new Lunchbox( 'medium', true, 'red', true);
lunchboxes.push( otherLunchbox);
console.log(otherLunchbox);

var originalLunchbox = new Lunchbox('medium', true, 'red', true)
lunchboxes.push(originalLunchbox);

// create lunch boxes with constructor and push to array
lunchboxes.push(originalLunchbox = new Lunchbox('medium', true, 'red', true)); // this also works

// putting a var in an array just takes the value of the var and doesn't change the var itself

// search for lunch boxes with images
function whatever ( images) {
    // create an empty array to hold results
    var results = [];
     for (var i = 0; i < lunchboxes.length; i++) {
         // for each lunchbox
         // are we looking for images
         if ( images ) {
             if (lunchboxes[i].image) { // this evaluates true if there is an image
                 results.push(lunchboxes[i]);
             } // found match
         } else { // end image
             if (!lunchboxes[i].image) { // this evaluates true if there is an image
                 results.push(lunchboxes[i]);
             } // found match
         }
     } //end for
     return results;
} // end whatever

// refactored
// search for lunch boxes with images
function whatever(images) {
    // create an empty array to hold results
    var results = [];
    for (var i = 0; i < lunchboxes.length; i++) {
        // for each lunchbox
        // are we looking for images
        if (lunchboxes[i].image === images) { // this evaluates true if there is an image
            results.push(lunchboxes[i]);
        } // found match
    } //end for
    return results;
} // end whatever

function bothHandleImage() {
    // empty array
    var results =[];
    for (var i = 0; i < lunchboxes.length; i++) {
        if ( lunchboxes[i[.handle && lunchboxes[i].image]]) {
            results.push(lunchboxes[i]);
        }
        return results;
    }
} // end bothHandleImage

// if we want to make this more searchable try making it take arguments 



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

// Layout of code - top to bottom
// this format is used so that variables and functions exist before they are called or refrenced

// global variables
// functions a-z (declare local variables at the top of functions)
// function calls
// loops

// with this format hoisting will never be an issue 
// hoisting will fix bad formatting where a function is called before it is written
// function declarations will not hoist and will return an error that it is not a function