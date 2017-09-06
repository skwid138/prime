/* Week 2 - Tuesday */

/***********Lecture: Express Intro, REST Intro***********

file structure
 - server.js
 - public (dir)
    - scripts (dir)
        - client.js
 - node_modules
 - .gitignore
 - package.json
 - 

- do not need to commit node_modules
    - touch .gitignore
    - open this file in vs code
    - add "node_modules/"

- npm init - This initializes dirs as a node project
- Express is a package used with node

- npm init --yes 
    - will force the init without prompting for questions
    - after init a package.json file is created 

- npm install express --save
    - this modifies the package.json file to show express as a dependency the --save makes the json file update
    - also creates node_modules dir

- npm uninstall [module name]
    - this is the preferred way (rather then editing the .json file) this will clean up the directories as well as remove the dependency in the.jason file

- to test things via terminal
    - node [file name ei script.js]
    ??? does the file need to be in a certain folder

- in order to make the server.js file an actual server it needs to listen

- to access your server through a browser you can use your ip, self assigned ip, or 'localhost:[port number]
    - when server is not running the browser will say it's unreachable
    - 

REST - Representational State Transfer
- get --> Read (get something)

- Do not need to listen before get

- control C to kill server

- res.sendStatus([code here]); - https://www.npmjs.com/package/http-status-codes
    - 200s are OK
    - 300s redirects
    - 400s ask wrong question
    - 500s broken server

- cannot make multiple app.get() calls on the same directory (ie '/') if you do it'll just run the 1st one
    - app.get() expects two arguments the path and a function
    - the function takes 2 arguments request and response, they do not need to be named as such

- 

******************in server.js******************
var express = require('express'); // because this is a node package the path is not needed
// this allows us to call methods etc. on express
var app = express();

app.listen(3003 function) { // the port doesn't matter for testing often 3000 or 5000 are used when we actually deploy we'll be using ???
// we're going to use huroku and it sets the port for us
    console.log('I'm a server'); // this does not return the prompt, but demonstrates it's listening
} 

app.get('/', function(req, res) { // express automatically creates the request and response object
// this is saying get something from the base of the server tree
    console.log('in the get /');
    res.send('a string goes here'); // when a get is ran it will respond with a string
    res.sendStatus([number has to go here]); // status codes
});

var catsArr = ['cat1', 'cat2', 'cat3'];

app.get('/cats'. function(req, res) { // to access this in the browser 'localhost:5000/cats
    res.send(catsArr); // prints the array to the browser
});



*/




/* Week 2 - Monday */

/******************Live Solve - Code Challenge Week 1******************

** can append variables like this
$div.append($('<p>', { 'text' : varName }));

doing the same as above you can add text to an element as well
$div.append($('<p>', { 'text' : 'someText' }));

making each append it's own variable seems to make it easier to append things where you want and keeps the code clean

.css() is a getter and a setter
in the challenge .css( 'background-color' )


*/

/****** Lecture: Node Install, The Internet, What is a Server?*******

- Ajax - a client-side script that communicates to and from a server/database without the need for a postback or a complete page refresh.
https://www.seguetech.com/ajax-technology/

the client hands ajax a js object
ajax converts that to json which is handed to node
node then does whatever it needs to with the json and hands ajax back json or a js object
*/

/* when using .data
- if it's hard coded in html it looks like data-[nameHere]="[valueHere]"
- if it's being used in jQuery 
*/

/******************Live Solve****************** 
 
mockaroo - generates fake data to use

- create README.md
- create js file
- create index
- copy jQuery 

- list of objectives in README
- Create index.html and source in js and jq
- ** git ignore the ds store file osx puts in every dir
- git init and commit

- create first name input field and submit button
- create event listener for submit button
- declare var for first name using jq
- create html table <thead> and <tbody>
- declare row $('<tr></tr>') as a var
- append '<td> + first name + </td>' to the row variable
- append row var to tbody
- append the submitted info to the DOM

** .append() is like concatenation, but for html - it doesn't have to be appended to something on the dom it can be appended to a variable that is used later.

- at this point you could validate the input (make sure it has data)
- declare var for all other input and append them to row as well
-  add html inputs using the id's created in the js file

** using a class on the inputs would allow one call to clear all fields instead of calling val( '' ) on each one

** adding type="text" or type="number" to input will only accept certain inputs and on mobile will popup certain keyboards (it will still come through as a string in js)

- declare var for parseFloat(salary) using this will retain the entire number even if it's not whole
- divide the salary number by 12 and append it to the dom
- using .text(varName)

** .text() or .html() will replace anything that's already on the page

** toFixed(2) to return integers out to 2 decimal places (there may also be a currency method)
** could also multiply by 100 then divide by 100 ie. Math.floor(var * 100) / 100 to remove the extra decimal places

** try to keep function to roughly 20 lines each to make it easier for yourself and others to follow

** rebuilding all the data (in the table) everytime is generally the way to do it if multiple people are working on things you want to make sure nothing is missed

** $(tableName).empty() will clear all the fields before all the data is written again, which is needed taking this approach to rebuilding the data everytime

- rewritting the data this way also makes remove an employee easier as well as makes the recalculation of the monthly salary cost easier

- using the employee id and .data() to remove a user will also allow the monthly total to be recalculated when they're removed
- add a new html table header for remove
- create a delete button in for loop that makes employee row
var $deleteButton = $('<td><button data-eid="' + person.id + '">Remove</button></td>")
- append that to $row which is being appended to the DOM already

- could make the remove button the same as submit, but it pops the person from the array and then rebuilds the table
- for loop to run through the array and compare property to find a match to the id then pop that person and recall the function


*/




/* Week 1 - Friday */

/*** If I have time this weekend change Inventory app
 - don't allow empty input (play a sound or show an alert)
 - don't allow duplicates (or add quantity)
    - check val()
    - maybe alert are you sure you want to add
 - display results on screen
*/

// is there a way to view jquery event listeners on elements


// SPA - Single Page Application
// using made up words for testing can be a useful way to identify if tests are still running
// in jquery a getter collects information and a sender sends information
// .val() is a getter and .val('somethingHERE') iss sender
// $ - in jQuery is commonly referred to as bling



/*******************************************/
/* this, .data(), .on()

- .append() will always add (or append) to the end of the element
- .appendTo() allows things to be appended to other areas
- closing tags
- same as concat in main append

Still working in prime/HTML CSS

- .data('color') --- this would look for data-color property of an html element 

*/

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