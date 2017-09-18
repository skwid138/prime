/* Week 4 - Monday */

/************* Weekend Challenge 3 Live Solve **************



 */

/* Week 3 - Friday */


/************** Weekend Challenge 3 ****************

https://nakupanda.github.io/bootstrap3-dialog/

At the end of a sprint you SHOULD do a retrospective
- retrospective 
    - what went well? AKA: Continue
    - what went poorly? AKA: Stop
    - what will we do differently going forward? AKA: Start

 */


/*************** Discussing Koala Holla, git, SQL, DELETE **************
git branch - a 
shows all local and remote branches

When deleteing in SQL do not need to *
 - DELETE FROM [table name]] WHERE id=$1

 when updating in SQL 
  - UPDATE [table name] SET [column name]='[value]' WHERE id=$1

Pool connections are threads

a call back function is a function that happens after a call is made (ie pool.connect etc.)

??? You cannot delete sql row data, you can only delete the entire row

 */


/* Week 3 - Thursday */

/************** Lecture Block: pg Review, Intro DELETE PUT, branching ****************

compare git branches 
- git master .. otherBranch
or
- git master ... otherBranch

can also compare them on github which has a nice visualisation

once ready to merge branch
- git checkout master
- git merge otherBranch

merging will typically not be destructive
    - it would typically add code instead of remove



for deleteing rows from DB
- post primary id to client side
- use req.params
- delete does not have a body so sending data from the client to the server is done through the URL
router parameters
 - using a colon in the url tells it that, that's a data point
 - req.params - this is an object that's created from the delete route
 - req.params.[prop] this would access the objects property


*/



/********** Lecture Block: Intro to Bootstrap ***********

getbootstrap.com

link bootstrap and bootstrap theme on index
can use npm install on bootstrap or download it and link it

defined as a class
    container - is used to hold elements in a central box on the screen
    container-fluid - fills the entire screen
    row - contains columns equal to 12
    col-md-8 - this makes a medium colum that is 8 columns in width
        - md is typical for desktop, the size defines break points xs would be used for phones etc.
    form - lays out labels and input well
        label - use for="email"
        input - use type="eamil"
            class="form-control"
    button - type="button" 
        class="btn btn-default" (styles grey)
        class="btn btn-danger" (styles red)
        class="btn btn-warning" (styles orange)
        class="btn btn-success" (styles orange)
        class="btn btn-info" (styles blue)

    glificon - premade icons for things
        span class="glyphicon glyphicon-heart" (styles )
        add the above inside whatever tags you want


 */



/* Week 3 - Wednesday */

/************** Lecture Block: Intro to pg ****************
 * using last weeks example of server side inventory branched from master to intro-pg
    - git checkout -b intro-pg

pg is a node module for postgres sql
    - npm install pg --save

create module to connect to db
- create modules folder
- inside modules folder create pools.js

a pool of connections is for multiple clients to connect to the db which makes it the prefered connection method

default port for postgres is 5432
One pool per project

******** pool.js example ********
var Pool = require('pg').Pool; // this sets Pool equal to a constructor, the method must be caps

var config = {
    host: 'localhost', // ip of server
    port: 5432, // port db is listening on
    database: 'inventory', // name of db
    max: 20 // how many clients/connections we want in pool (default is 10)
};

var pool = new Pool(config);

module.exports = pool;
***********************************

After pool created, do a commit

then create a schema for the db (table)
- primary key
- item (name of item) - varchar(200)

add database.sql to project folder with table adds and comments for others to use

good to test inventory queries prior to adding them to the route

Can't set headers after they are sent
- this means there are multiple res.send in route, to resolve remove the extra


do not want to insert or concatinate js variables into sql queries
- it could allow for malicous sql to be input
- instead used parameterized queries 




 */




/* Week 3 - Tuesday */


/*********** Taylor Time *************

Summary should be what I'm doing at Prime and what I'd like to do after.
 - maybe mention strengths from strength finder

 experience description PRIME (will evolve over my time here)
 - why I came to prime over university or bootcamp
 - what I am really loving here
 - recomended length a paragraph or two
 - use buzz words, don't just list technologies

 Try to make descriptions of other jobs relevant to software engineering
- bulleted lists are better than long descriptions

Should breakup Job Titles into different positions 

 */

/************** Lecture Block: What is a Database? and pSQL Basics ************

- Persistance - https: //en.wikipedia.org/wiki/Persistence_(computer_science)
in cs refers to characteristics of state that outlives the process that created it

    - state - https: //en.wikipedia.org/wiki/State_(computer_science)
    a program is described as stateful if it is designed to remember preceding events or user interactions; the remembered information is called the state of the system.

    - process - https: //en.wikipedia.org/wiki/Process_(computing)
     is an instance of a computer program that is being executed.It contains the program code and its current activity.

- a DBs main job is to hold onto state
- using a DB with our server should mean less reboots and more dynamic information

to list DBs from terminal start 'psql', then enter 'l'


These two types of DBs are the kind we'll be using
- relational DB (SQL)
    - Many tables that can reference each other in a cascading layout
    - relate to each other with unique ids
    - predefined schema
    - tables with entities

- non-relational DB (NO SQL)
    - large json file (no tables)
    - more flexible types
    - no predefined schema

- schema - defines what tables are, what data is in them, and how they relate to each other
- result set - is the data returned from a query

ERD (entity relational diagram)
** Table and row example **
Users
- ID (serial #) - postgres makes these automatically (if we setup the schema correctly)
- Username (varchar)
- Active (boolean)
- Created (timestamp type)

- varchar - means string type of data
    VARCHAR(length here as a number)
    ie VARCHAR(20) throws error if longer

can setup schema so it only accepts certain data types in columns (varchar, boolean, int, timestamp, etc.)
modifiers can also add constraints to input (not null, unique, primary key, etc.)

Can set defaults to input fields (like setting the active boolean to true when a new row is added)

following along in postico (users DB)
- keyword does not need to be caps, but it's good practice
-query

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE,
    active BOOLEAN DEFAULT true,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

click Execute Statement
CMD R or click refresh button on the top to view newly create table
once viewing the table you can view the structure(button on bottom)

** CRUD **
    Create - REST side POST | DB side Insert
    Read - REST side GET | DB side Select
    Update - REST side PUT | DB side Update
    Delete - REST side Delete | DB side Delete

Queries can be left on screen

comments are created by 
-- [comment here]

highlighted query is what runs on execute - may highlight several 

it may remember historical queries, but don't rely on it

varchar - can accept caps and lower case

following along in postico(users DB)
--INSERT

INSERT INTO users(username, active) VALUES('hunter', true);
INSERT INTO users(username, active) VALUES('Guy', true);
INSERT INTO users(username, active) VALUES('Ethan', false);

--SELECT Examples
SELECT * FROM users;
    The above select selects all the records in the users table an alternative is to list out columns separated by commas, like below
SELECT username, active FROM users;

WHERE - additional conditions can be added

SELECT * FROM users WHERE active=true; 
 - this looks through all the rows in the users table and returns the active users 

SELECT * FROM users WHERE username LIKE 'ra%';
    This looks for usernames that start with ra and end with a 'wildcard'

<> is the the opposite of equals
!= is the opposite of equals

SELECT * FROM users WHERE active=false AND username='Ethan';
    shows records that have active set to false that also have a username of Ethan
SELECT * FROM users WHERE active=true OR username ='Ethan';
    shows records that have active set to true and also show records that have a username of Ethan

--IN
SELECT * FROM users WHERE username IN('Ethan', 'hunter');
    lets you search for multiple things

--ALIAS changes column names in result set
SELECT username AS 'USERname' FROM user;

-- ORDER BY
SELECT * FROM users ORDER BY username;
    returns the rows in alpha order

SELECT * FROM users ORDER BY username ASC;
    assecnding 
SELECT * FROM users ORDER BY username DESC;
    decending

-- LIMIT
SELECT * FROM users LIMIT 4;
    only shows 4 records

-- UPDATE
SELECT * FROM users username = 'hunter';
UPDATE users SET username = 'hunter138' WHERE username = 'hunter';
    DO NOT need to select first, but you can use that query after the update to confirm it worked
    this looks in the users table, the username column for 'hunter' then updates it to 'hunter138'

SELECT * FROM users WHERE active = true;
UPDATE users SET active=false WHERE active=true;
    this sets all active users to false

** There is no undo **

-- DELETE
SELECT * FROM users WHERE id=5;
DELETE FROM users WHERE id=5;
    deletes the row that contains id 5

-- Aggregate Functions
SELECT COUNT(username) FROM users;
SELECT * FROM users;
SELECT MAX(id) FROM users;
SELECT MIN(id) FROM users;

    Aggregate Functions are a way to pass some of the workload to the DB instead of the server or your code.



 */



/* Week 3 - Monday */


/*************** Code Challenge Live Solve *****************

do not need to use an unamed function to call a defined function on success
- can just put the function name without ()
** example success: getCats


throttle network through console > network and then upper right hand side





 */


/******************** Weekend Challenge Live Solve 2 *****************
 https: //github.com/devjanaprime/canopusWeekend2ChallengeLiveSolve

- you can npm install multiple modules at once
mpn install body-parser express --save

* dev nests the routes folder inside modules folder

if doing a use in a router (body-parser example)
var bodyParser = require('body-parser');
router.use( bodyParser.urlencoded( {extended: true } ));

* dev names route variables as their name instead of nameRouter

* without putting a res.send or res.sendStatus the ajax success would not get triggered 

- I sent back an array of objects, dev sent back an object with the array as a property and value
* the reason to do this is it allows you to send back multiple things (status code and an array)
* also if the response is just a number it may be interpreted as a status code

- hard codding html in the output section first is a helpful way to remember to empty the container
example: <p>output should go here</p>

- when sending an object with the array of object the loop will be different
i < response.people.length
response.people[i].name

** Hard Mode ** 
- remove loop in getPeople
- var in success of getPeople to display first person in array
- var in success of getPeople for count index/response.people.length
- if to do something if array has 0 people
- global variable for index (use this in response.people[index].name)
- display (index + )1 / response.people.length
- move all this code into it's own function because it would only work on a successful get and it needs to work on button clicks
- add new function name as a call in success of getPeople so it still does happen on the get
- send response.people as an argument into the new function (lets call it showPerson)
- this will send just the array so the references to the array need to be updated (no longer an object with an array of objects)
- variables for button elements (prev and next)
- variable for controls
- append buttons to controls
- append person to output
- append count to output
- append controls to output

- event listener for each new button linking to a function for prevPerson or nextPerson

- nextPerson func
- increment index (index ++)
- show next person (the above acomplishes both)
- wrap

- prevPerson func
- index -- 
- the above shows prev person and fixes index, does not wrap

** could use if else for wrapping... I think
** could also use if with or operator to check for null values of inputs too

*/


/* Week 2 - Friday */

/**************** Weekend Home Work ************





*/

/************* Lecture Block: Routers **************

make a directory for routes (similar to modules) on the base project folder
    - index.js

routers are technically modules, but only have to do with routing

to refrence a route you need to create a require and a use in the server file

********** code example *********
// Requires
var express = require('express');
var path = require('path');

// Makes this a router
var router = express.Router();

// could also skip declaring express and combine the express and router declaration
// var router = require('express').Router();

//app.get here
//base url
router.get('/', function (req, res) { // change this to router
    res.sendFile(path.resolve('public/views/index.html'));
}); // end base

// export
module.exports = router;
************************************************




 */



/* Week 2 - Thursday */


/************* Taylor Time *************

- Networking -

Assignment
    - NEED to attend a networking event sometime from now until next friday
    - create a tech.mn profile
    - create a meetup account with photo
    - create a profile on eventbrite

    - must average 1-2 events a week
    - meetups, conferences, speaches/talks
    - plan events out 2 weeks in advance

- tech.mn
    - events tab (shows events)

9/12 - mpls jr dev (@ prime)

** popular events **
- JavaScript MN (last wednesday of the month)
- Angular MN (first wednesday of month)
- NodeMN (2nd tuesday of the month)


DO NOT bring anything  (resume, business cards, etc.)

Smart Goals (specific, measurable, achievable, reasonable, timely)
- set goals for each meetup
- try to get something out of it
    - talk to speaker
    - talk to hiring managers
    - avoid prime grads
- setup meetings outside the meetup
    - get coffee 
    - learn about being a dev
    - learn about being a dev for a specific company

Twin Cities Startup Week oct (8)9-15
- tickets are free
- oct 8 sunday opening night $5?
- beta MN oct 10 tuesday
- tech stars oct 11 demo day
- oct 12 minnedemo (7 businesses present live code) by minnestar (happens every quarter)
- oct 13 closing event

minnebar - happens every 6 months


** websites of interest **
- minnestar.org
- tctech.events (links are often broken and dates are often wrong, but is a good list of events)
- front end masters
 


 */


/******************Lecture Block: Ajax and Server Side Inventory************

npm init - for new node projects (creates package.json)
npm install - for existing node projects (pulls down dependencies)

new project to do list
- create files and directories
- git init
- npm init --yes
- npm install express --save
- create .gitignore file and add node_modules
- npm install body-parser --save

// these work the same for path
// declare path as a variable
path.jon(__dirName, '.public/views/index.html') // two underscores
path.resolve( 'public/views/index.html') 

git dif shows whats different


body-parser allows the server to use the data the client sends
app.use(bodyParser.urlencoded({ extended: true })); 
// extended true is used for objects deeply nested


res.sendStatus(201); // 202 means accepted 201 means created


 */

/********************** Group Activity and Questions *********************

- What is a module
    - a bit of code that would be useful in multiple projects

var moduleName = require( './modules/moduleName' );
// this sets the moduleName variable to the value of the return


module 1 and module 2 will feed module 3 and then tell the server which will have the client log or display the results on the dom


*/




/* Week 2 - Wednesday */

/*******************Lecture Block: Node Modules******************
 
- in package.json under scripts
    'start': "node server.js"


on a new file [fileName].js

function funcName () {
    var varName = [something];
    return [something];
}
module.export = funcName();


** if there is a bit of code that would be useful in multiple projects then make it a module



 */

/***************Peer activity notes*********************

- create a new get route on server.js

- setup click listener on client.js
- function to make a get request
- call ajax on bling($) in the request function
$.ajax({
    method: 'GET',
    url: '/[new Get],
    success: function() {
        console.log(' back from server with: ', response)
    }
});
- on server.js setup console log in new get route
    - test this out
- res.send('my mom');


 */

// ** a good rule of thumb for commits is if you're needing to use multiple "and"s then you should be doing more commits

/***********Lecture: Express Intro, REST Intro***********

https://github.com/PrimeAcademy/canopus-intro-express-ajax/tree/e716092b129791d61b69bee68e32539bde890d9e

file structure
 - server.js
 - public (dir)
    - scripts (dir)
        - client.js
    - vendors (dir)
    - views (dir)
        - index.html
 - node_modules
 - .gitignore
 - package.json

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

- npm install jquery 
    - will download jQuery if you don't use --yes then you can move the file into public/vendors dir

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
 get --> Read (get something)
 POST --> Create

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

- the script tag on an html file will prompt the server for the file so the source in this instance would be
    - src="/scripts/client.js"

- app.use(express.static()); this lets express handle locating static files so they can be referenced on html

- ajax is a method we call on $(bling) in jquery to talk to the server

******************in server.js******************
var express = require('express'); // because this is a node package the path is not needed
// this allows us to call methods etc. on express
var app = express();

var path = require('path');

app.listen(3003 function) { // the port doesn't matter for testing often 3000 or 5000 are used when we actually deploy we'll be using ???
// we're going to use huroku and it sets the port for us
    console.log('I'm a server'); // this does not return the prompt, but demonstrates it's listening
} 

// express static file serving
app.use(express.static('public'));

app.get('/', function(req, res) { 
    console.log('in the get /');
    var ourIndexPath = path.join(_dirname, './public/views/index.html')
    // _dirname is the location on the server (or local computer in this instance)
    // this is done to keep it dynamic so it can be run from a different machine
    console.log('path', ourIndexPath)
    res.sendFile(ourIndexPath);
});

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

*************** in client.js************************
function onReady() {
    console.log('doc ready');
    $.ajax({
        type: 'GET', // method or verb
        url: '/cats'
        success: function(response) { // param can be called anything
            // success runs when the server response is successful
            console.log('in success', response); // this logs in the browser because this file is running in the browser
        }
        error: function(){
                // if the get fails it can execute this function
        }
        }
    })
}

$(document).ready(onReady);



*/




/* Week 2 - Tuesday */

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