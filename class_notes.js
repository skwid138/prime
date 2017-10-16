/* Week 8 - Monday */

/******************** Taylor Time ********************

** resume due nov 2nd at 10:00am **

    - should be name my first and last name as a pdf
    - send my bio
    - send linkedin
    - send github link 
    - and send resume

** Bio
    - things I want to talk about in an interview
    - not a dating profile
    - what I'm doing what I want to do
    - not about my age, etc.


    If I want a resume review with kristy I have to slack her


    Resume

    NAME on the top
    followed by contact info (email, phone, github link)
    NO ADDRESS, NO CITY, NO STATE
    NO LINKEDIN
    could have personal site as well as long as it's about development

headings for SKILLS with lists of skills (tech and none tech) most valuable skills and skills you're best at from top to bottom of list and left to right
    DO NOT list skills that you do not want to use at a job
    LIST 'MEAN STACK' and MONGO, EXPRESS, ANGULARJS, and NODE.JS

heading for EXPERIENCE 
    DO NOT say relevant or related just have experience
    PRIME will be in experience and Education
    use full month names and dashes between them
    Title at prime can be anything, but needs to contain student (ie front end developer student or backend development student) 
    DO NOT use engineer here it will be used later
    list solo project and group project
        solo (name)
            (high level, leave a little mystery so employers are intrigued and want tto know more)
            sentence fragments, no periods
            - what is it - why did I create it (what was the issue and why am I solving it)
            - who a user is and why would they use it
            - tech used (can list MEAN stack and could also list it out)
        group - client name (not app name)
            - talk about working on a team of developers 
            - who I worked with (how many devs NOT STUDENTS)
            - what is the problem and what was the current process
            - what is the solution we created? what the app does, how it's used and why its better
            - what was I solely responsible for?
            - technologies used (include APIs, but not modules for angular or material)

Multiple job titles
 - show full date range
 then list titles and date range for just that position/title
 if duties overlapped do not list them twice

 list that I worked with people in multiple states
 cross functional teams? - look into this

 LINKEDIN should nto be the exact same as RESUME

 it's okay to have gaps and only add jobs I want
 probably don't go too far back college jobs are okay, if they're tech related

 if I can get points across in another job it's okay to skip (ie working as a team operating heavy equipment)

 heading for Education
    - degree / cert
    - location (city state)
    - activities, honors, acheivments
    Full-Stack Software Engineering Certification  <- exactly like this
    (just month and year of graduation)
    can list what prime is, but make it unique
    only include month and year if graduated, if not then show range of attendance 


heading *OPTIONAL* community Involvment / VOLUNTEERING
        - this section can include volunteer work
        - it cans include hackathons
        - do not include meetup attendance
        - can include things that do not involve development
        Lay this out similar to experience


START BY LISTING ALL INFO ON RESUME (EVEN IF IT's HUGE, THEN TRIM IT DOWN)

No PAGE NUMBERS

NO HEADER on 2nd, 3rd page etc.






 */



/* Week 7 - Thursday */


/*********************** Promises and Callbacks ********************
 
******** Callbacks ********

- a function that runs after another function
- passed into a method as an argument (usually)

function funcy (data, callback, error) {
    for (let i = 0; i < data.length; i++) {
        // do something
    } // end for
    if (callback) {
        // if callback is passed in as an argument then call it
        // if it's not passed in then it is undefined making this if falsy
        callback(); 
    } // end if callback
    else if (error) {
        error();
    } // end else if for error
} // end funcy


********* Promises *********

- if something happens then something else happens
- promises are always objects
- some promise objects have methods

.then()
    - a method of most promises

.catch()
    - a method of most promises

from weekend 6 (refactored for promises)
**** app.js ****
app.get()
request-promise(user_).then(function(body) {
    res.send(body);
    }).catch(function(error) {

    } // end catch
); // end request


es6 has a promise constructor
there are also promise libraries

one advantage to using promises is that you can handle the success and error wherever you want(server, service, controller)

*/

/***************** Project Management ****************
 




 */




/* Week 7 - Wednesday */

/***************  ES6/OOP ****************
 
https://github.com/mhwalsh/psi-oop-es6-lecture-notes

can mix ES6 with older versions

Not all browsers support ES6. See this chart for details: 
https://kangax.github.io/compat-table/es6/

transpile (using babel and grunt)
https://babeljs.io/
    - convert es6 into es2015

grunt
    - can minifie
    - can also setup something to automate the transpiling


Object Oriented Programming

https://github.com/mhwalsh/psi-oop-es6-lecture-notes/blob/master/oop.md
    - an object is a concept that describes entities in our programs
    - Java, C++, Python, and ES6 introduces some
    
Objects 
    - identity (describes obj)
    - attributes (defines state of object)
    - behavior (defines how the objects acts, or ‘things they can do’)

Classes
    - how objects are described (sort of like a prototype)
    - like a blueprint for the object
    - must have a constructor(only 1 per class), but may also have behaviors 

// Identity or name
class Dog {
  // attributes or state of the object
  constructor(){
    this.name = name;
  } // end constructor
  // procedures or behaviors that describe how the object acts
  bark(){
    console.log('woof!');
  } // end bark
} // end class


Inheritance 
    - classes can extend other classes by inheriting their attributes
    - when extending you must use a super constructor (like below)
    - does not hoist the same way it does in es2015 so animal must come first in the code

class Animal {
  constructor(name){
    this.name = name;
  } // end constructor
  poop(){
    console.log('everyone poops!');
  } // end poop
} // end Animal

class Dog extends Animal{
  constructor(name){
    super(name);
  } // end constructor
  bark(){
    console.log('woof!');
  } // end bark
} // end dog

var ourDog = new Dog('Larry');

class Cat extends Animal {
    constructor(name, lives) {
        super(name);
        this.lives = lives;
        this.landOnFeet = true;
    } // end constructor
    meow() {
        console.log('meow')
    } // end meow
} // end cat

var theCat = new Cat(Bro, 7);



BOOK TO READ
    - JavaScript Design Patterns


Var, Let, and Const
https://github.com/mhwalsh/psi-oop-es6-lecture-notes/blob/master/es6-intro.md

var has function scope
    - globally declared vars hold their value
    - vars inside functions hold their value inside the function, but do not exist outside
    - vars can be redeclared again and again

let has block scope
    - in a for loop let exists, but outside the for loop let is undefined
    - another use for let would be in mathematical algorithms

const has global scope
    - cannot be redeclared
    - cannot have the value change
    - not hoisted


Arrow Functions
http://es6-features.org/#Constants

let name = (params) => { 1+1 };



 */



/* Week 7 - Tuesday */

/********************* Unit Testing **********************
 https://github.com/PrimeAcademy/canopus-testing-intro

Uses
- Regression
    - testing old code as new code is written to make sure new code isn't breaking old code
    - may require tests to be updated
- Planning
    - writing the test before the code will help round out the though process for approaching an issue
- Code can outwit people
- Specific

Writing unit tests for code challenges at prospective employers can be a way to really impress

Automated testing is different than test automation
    - automated testing is writing code to test other code (typically done by a developer)
    - test automation is typically a QA thing (not done by dev)

TYPES
 - Unit tests and Integration tests
    - unit is more for testing individual pieces of code (functions etc.)
    - integration is typically for testing the full stack (testing routes, etc.)

Chai Assertion Library
    - chaijs.org
    - chaijs.org/api/bdd (shows syntax for should/expect)

    3 library's
    - Should
    - Expect
    - Assert

Circle CI
- tool for running unit tests    


Mocha
npm install --global mocha (install globally)
npm install mocha --save-dev  (makes it a dev dependency on a project)

npm install mocha chai --save-dev

NEW FILE STRUCTURE
** on root **
src - dir with all code
test - dir with all tests

naming convention for tests [moduleName].test.js

can nest describe in describe

**** [moduleName].test.js ****
var [moduleName] = require('../src/modules/[moduleName]');
var expect = require('chai').expect;

describe('test for [moduleName]', function() {
    describe('happy path', function() {
        it('should do something', function() {
            // call function to test and log results
            console.log([moduleName]()); 
            expect([moduleName]()).to.equal([return of moduleName]);
        }) // end it
        it('should return [a type]', function() {
            expect([moduleName]()).to.be.a('[string, number, etc.]');
        }) // end 2nd it
    }) // end happy path
    
}); // end describe

**** package.json ****

"scripts":{
    "start": "node src/server.js",
    "test": "mocha test/"
}

Can also test server routes

npm install request --save-dev

**** server.js ****
[listening with all requires including request and a /get]


**** server.test.js ****
var request = require('../src/modules/[moduleName]');
var expect = require('chai').expect;

var url = 'http:///localhost:3000/[moduleName]/[module argument]

describe('test for server file server.js', function() {
    describe('module route', function() {
        it('should do what module should do', function(done) {
            request(url, function(err, response, body) {
                console.log('body ->', body);
                // have to parse the body from JSON to a JS Obj
                expect(JSON.parse(body).result).to.eqaul([what module return should be]);
                // both expects need to be true for the test to pass
                expect(response.stsatusCode.to.be.equal(200));
                done();
            }) // end request
        }) // end it
    }) // end 2nd describe

}); // end describe


Other testing tools
- karma
- webdriver.io

good functions to look into
- inside describe before and after can be used to run things before testing and then after
    before(); 
    after();
 



 */


/*************** Mongoose Sub Docs and Population ****************
 
Code from lecture this morning: https://github.com/PrimeAcademy/canopus-mongoose-many-to-many
Similar code from my prep with examples of postman queries: https://github.com/PrimeAcademy/mongoose-many-to-many

Debugger
 - attach to port
 - point at server.js file
 - once debugger is running you can hover the mouse over variables, and arguments to see their values

 Multiple collections (1 to many and many to many)
 - querying for one item in one collection shows the item and then the related item in an array showing just it's id

 $populate
 - this is how multiple collections can be related to each-other
 [need luke's repo]

$push 
- pushes items into an array


** Callback Hell
    - when you have so many nested callbacks that there is barely any screen space left to write additional code


 */


/* Week 7 - Monday */


/************ Taylor Time *************
 
- recruiters (not at individual companies, but like robert half)

3 Options
- contract
    - has a designated time window and typically do not get hired after
    - get paid by recruitment firm
- contract to hire
    - gives the company the opportunity to try the person out and allows the employee to try the company
    - paid by recruitment firm
- direct hire
    - hired directly to company


Staffing and recruitment firms also offer insurance (usually cobra)

Come up with annual salary divide by 2080 for hourly, then add 4 dollars for benefits 

DO NOT work with a recruiter that charges you for services

DO NOT apply to a position that a recruiter mentioned (on our own or through another recruiter)
    - you will likely not get looked at at all for the position
    - let recruiter know if you've applied to a position already

Track all places I've applied as well as recruiter applying on my behalf
    - keep track of job id number as titles and descriptions can sound similar
    - track id, desc, title, recruiter name

DO NOT apply for multiple jobs at one company
    - looks bad (just pick one, that's most aligned for you or most exciting)
    - ask hr person about other positions

RED FLAGS
- asking for money
- recruiter that reaches out via email(typically)
    - don't want to meet with you, but just ask if you want to be submitted
- clear expectations on how to communicate and how often (and they don't hold up their end of the deal)
- 

Ask recruiter who they work with (what types of companies)
- I want to work for X can you help me etc.

Being submitted does not mean you'll get a job, an interview, or even your resume looked at
- should say yes to most places you want to work for


 */

/******************* ReadMe ************************ 
 
Readmes:
 - https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
- https://guides.github.com/features/mastering-markdown

*/


/* Week 6 - Friday */



/* Week 6 - Thursday */

/****************** Passport Q&A ****************
https://github.com/PrimeAcademy/canopus-passport

- adding code to lecture code from wednesday


Rebooting server will wipe out any active sessions
    - good for testing session timeout redirects, etc.

Serialize - makes a the user a cookie on initial request

Application and Network tabs in the dev tools will be great resources for testing sessions and cookies

Sessions
npm install express-session --save

req.logout();
    - expires session
    - wrap in a logout route
    - tie route to button click


Code Smell - feeling uneasy or negative about code or the approach of solving an issue



**** server.js ****
var session = require('express-session');

app.use(session({
secret: 'any Random String', // might eventually want to use an environment variable to obscure this at some point
key: 'user', // token for session
resave: true,
saveUninitialized: false,
// maxage is in miliseconds (shows as expiration)
cookie: {maxage: 60000, secure: false} 
})); // end use session

// initialize passport
app.use(passport.session()); // tells passport to use the session


Hash and Salt
npm install bycrypt --save

OG password is salted then hashed and the salt is added to the hash

**** server.js ****
var SALT_WORK_FACTOR = 10; // default is 10 (this is the number of iterations, the higher the number, the slower and more secure it will be)


**** schema.js ****

var user = this;

if (user.isModified('password')) {
    net();
}  // end if

bycrypt.getSalt(SALT_WORK_FACTOR, function(err, salt) {
    if(err) {
        console.log('salt error');
    } // end if
    // takes the field we want to hash
    bycrypt.hash(user.password, salt, function(err, hash) {
        if(err) {
            next();
        } // end if

        user.password = hash;
        next();
    })
})

// cabdidatePassword iis the password entered by the user
UserSchema.methods.comparePassword = function(cabdidatePassword, callback) {

    var user = this; // current user object or schema model
    bycrypt.compare(candidatePassword, user.password, function(err, isMatch) {
        if(err) {

        }

        callback(null, isMatch)
    })

} // end compare


**** localStrategy.js ****

// EDIT THIS in passport.use('local', new Strategy

User.findOne({username: username}, function(err, user) {
            if(!user) {
                done(null, false, {message: 'Incorrect Credentials!'})
            } else {
                // if successful, passport will serialize the user (see above serializeUser method)
                // if the username matches, then check if password matches
                if(password === user.password) {
                    done(null, user);
                } else {
                    user.comparePassword(password, function(err, isMatch) {
                        if(err) {
                            throw err;
                        } // end if error
                        if(isMatch) {
                            done(null, user);
                        } else {
                            console.log('invalid creds');
                            done(null, false, {message: 'Incorrect Credentials'})
                        } // end else
                    }) // end comparePassword
                } // end password else
            } // end username else
        }) // end find



 */



/* Week 6 - wednesday */


/****************** Passport ******************

http://passportjs.org/docs

https://github.com/PrimeAcademy/canopus-passport


Username & Password
    - click Submit
Register user function on Controller 
    - checks is username and password fields have values
    - create user object if they do have values
Services takes user object as argument    
    - POST data to server
Server route hits schema
    - server writes user data to DB


**** schema.js ****    
var Schema = require

new Schema
    username = {type: string, index: {unique: true}}  // syntax is likely wrong, but putting index makes the DB queries faster? I think


asdf is a very common password for testing

**** user.service.js *****

$http.post('route', object).then(function(resp){
    console.log('successful response', resp);
    // sends the user to an authenticated view if there credentials match the DB
    $location.path('/user'); // can do something similar on a successful register POST
}).catch(function(error){
    console.log('catch error', error);
});


**** indexRoute.js **** (must be exported and required on server.js, just like other routers)
var router = require('express').Router();
var passport = require('passport');

// if the entire post fails (like if local is not defined, then it throws a 500 error)
// the authenticate method will automatically send a 401 if unsuccessful
router.post('/', passport.authenticate('local'), function(req, res) {   // the local strategy must be created for this to work
    console.log('in POSt');
    res.sendStatus(200);
}); // end POST

module.exports = router;

// The way below is okay, but more messy with client side routes and NG
********
app.post('/login', passport.authenticate('local', { //localStrategy.js (below)
    successRedirect: '/',
    failureRedirect: '/login'
}));
********


**** localStrategy.js **** (must be exported and required on server.js, similar to routes)
// make strategys directory
// js file inside it
// npm install passport-local --save 
// different package for different types of strategies

var passport = require('passport');
require('passport-local').Strategy;

var User = require('..models/userModel');

// this serialized user comes into play with session management, as it stands now, nothing is being done with it
passport.serializeUser(function(user, done) {
    console.log('in serializeUser');
    done(null, user.id);
}); // end serialize


passport.use('local', new Strategy({
    // usernameField defines the filed in the DB that is the key to passport
    usernameField: 'username', // if this was an email it would still need to say usernameField for the property, but it would say 'email'
    // the order of these does not matter, but they do need to be here
    passReqToCallback: true // this allows req to be passed into the callback function
    }, 
    function (req, username, password, done) {  // done is a callback function inside the callback function
        console.log('inside strategy callback');

        User.findOne({username: username}, function(err, user) {
            if(!user) {
                done(null, false, {message: 'Incorrect Credentials!'})
            } else {
                // if successful, passport will serialize the user (see above serializeUser method)
                // if the username matches, then check if password matches
                if(password === user.password) {
                    done(null, user);
                } else {
                    console.lot('Incorrect Username or Password!');
                    done(null, false, {message: 'Incorrect Username or Password!'});
                } // end password else
            } // end username else
        }) // end find

        //always fail -> done(null, false, {message: 'always failing'}) 

        } // end strat callback
    ) // end new Strategy
); // end passport.use

module.exports = passport;

// constructor can be separated as well if it's easier
************
var localStrat = new Strategy({
    usernameField: 'username',
    passReqToCallback: true
}); // end Strategy

passport.use('local', localStrat);
************



 */



/* Week 6 - Tuesday */

/**************** Auth Overview ****************

Auth
    - are valid users in the system
    - permissions / roles

Types
    - 2 factor 
        - 2nd message (multi device)
    - OAuth2 
        - use another systems authentication (google, facebook, etc.)
        - larger companies are typically more secure
        - 
    - local 
        - our server and DB

Putting the authentication on the server prevents headless applications (like postman) from accessing the server without authenticating


What will change with authentication.
    Datamodel
    - a collection, sub-document, or table to store user data with joins to other tables
    - SELECT * FROM table_name WHERE user="logged_in_user"
    - inserting data may need to also insert the data and then the referenced data as well
    Route
    - check if user is valid


1. initial request/login
    - login page that gathers username and password to hand to server
    - server will validate username and password
        - does user exist?
        - does users password match?
    - if valid serialize user 
        - user id is encrypted or hashed and called a "token"
    - if invalid return to login page (be obscure in errors, 'invalid username or password')
    - set cookie that contains token

2. Subsequent Requests
    - request is made
    - does the user have a session / cookie
    - validate session
        - if invalid, send to login page
        - if valid allow request



 */


/***************** APIs and Request Library *****************

https://github.com/request/request

https://github.com/mhwalsh/lecture-guides/blob/master/deployment-odds-ends.md

client side API request - is an API request from the client side (like the giphy lecture)
    - publicly visible API key

server side API request - is an API request from the server side
    - benefits of server side is that the data is hidden
    - hidden API key
    - may contain passwords

on server side you can set environment variables with passwords
    - typically in a hidden file called .env that is in the .gitignore

npm install request --save
- it is a dependency others will need

token - is an API key

**** server.js ****
var request = require('request');
app.get('/', function(req, res) {
    request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
    });
    // res.sendStatus(200);
    res.status(200).send(JSON.parse(body));
});

github lets you create tokens from settings and Personal access tokens

a lot of APIs will not require the options below, but github does

headers - part of a request with authentication info

var options = {
    url: '',
    method: 'GET',
    headers: {
        'Authorization': 'Token [token here(long hash #)]', // the spave after : needs to be there
        'User-Agent': 'someName' // this is something github requires to access user info
    }
}


res.status(200).send();
    - allows you to send a status and data
    - can be chained where sendStatus cannot


npm install dotenv --save
    - also a dependency of the project

**** .env *****    
create file locally called ".env" in the root of project directory
line 1 is the name of the key = the key (name doesn't matter)
key_name=[hash number here]

**** server.js ****
// every file that needs .env variables needs this line
// make env var global to this file
require('dotenv').config();

var options = {
    url: '',
    method: 'GET',
    headers: {
        'Authorization': process.env.key_name, // no quotes on this
        'User-Agent': 'someName'
    }
}


Good resource for APIs
    https://www.programmableweb.com/


If you haven't pushed and want to overwrite an amend
git commit -amend
:wq to exit VIM editor

Heroku Setup Config variables 
    - can hide .env variables in heroku


 */


/************** Taylor Time ****************

Salary negotiation
- most companies are not going to low ball you, most will (assuming it's reasonable) will give to the higher end of your range
- range should never be more than 7k
- range should be odd numbers (51K-56K sounds better to the employer than 50k-55k)
- salary is more then the pay
    - mentors
    - travel
    - benefits (insurance, etc.)
    - PTO (very easy to negotiate as it doesn't effect the team's budget, it hits the company)

- If an application asks for previous salary enter $1
- If an application asks for range also enter $1 (signals you want to have a conversation)
- If interviewer asks for previous salary (even if it's good) thank them for the question and tell them skills that you have and used there

- average prime grad makes 57k at their first job
- bell curve is 55-65

- While negotiating, tell them what you want, but not why. Just say it and shut up

- 

Starup Week
 - create some goals
    - get contact info for 3 people in tech 
    - learn a new technology 
    - etc

After Prime
- to use taylor must complete all assignments
- list of things to complete before grad to receive career support
- keep coding, but in small amounts so you can show off your work
- it's almost better to keep starting new projects as it's easier to show off work of multiple projects then show progress of one larger project

Most common skills in MSP or What do most prime students learn next/use in their first job
 - have to find this on my own

Clean github
- good naming convention
- good descriptions
- READMEs on all repos

example: https: //github.com/geekyBrewster



** Wand - makes POS software (local to MSP)

 */


/*************** Code Challenge Live Solve **************

It's best practice to wrap functions from services that are being called on controllers in a function local to that controller

how to sort backwards through DB response using angularjs and ng-repeat
- | orderBy : "-_id"
or!
- | orderBy : '-'


 */


/* Week 6 - Monday */

/************** Weekend 5 Live Solve ****************
https: //github.com/PrimeAcademy/canopus-weekend-5-live-solve

One Controller per view

One Service per table or collection

npm init -y (should already know this, but I always seem to forget, it saves you from answering all the questions)

as long as there is an index.html file in the static folder location on server.js then now app.get or router.get is needed to serve the html file

The full versions of angular and angular routes may make debugging easier and are recomended for development

Can test myApp.config routes by using template w/o controllers to test if the client side routes are working

ng-href - waits until ng is loaded before setting the link

setting otherwise to 404 could be a handy way to see if the otherwise route is being hit

from the DB route
listingins.find().then(function(results))
// this will get everything in the collection after that is completed THEN is runs the callback

luke puts {{controllerName}} in the templateUrl html doc while setting everything up so he knows it's all being passed from jump to jump

 */



/* Week 5 - Friday */

/************ Weekend 5 challenge *************




 */


/************** Angular Materials Intro **************

https://material.angularjs.org/latest/
https://material.angularjs.org/1.1.0/getting-started

Angular Materials is a styling framework designed by google (who also designed angular)

Likely similar to ui.bootstrap (the NG bootstrap module)

There are five files to source on index.html
- css file and 4 js files

Unlike bootstrap which uses rows and columns NG materials uses a "flex system"

https://material.angularjs.org/latest/layout/introduction
<div layout="column">
    - anything inside of this would be aligned in a column dynamically
<div layout="row" layout-xs="column">
    - rows should be insdie columns, but can also have dynamic sizes that change them into columns
    - it's a good idea to add height to the divs otherwise they'll only be as big as their contents

layout-align="center center"
    - this centers the element horizontally and vertically

https://material.angularjs.org/latest/demo/dialog
$mdDialog - this is a dialog box that is built into materials
    - this needs to be bassed into the controllers anonymous func
$event - on html page is used to capture an event (like click, etc.)
#popupContainer
    - this is a styling id that is passed into the querySelector method in the controller
    - The line above is a bit cryptic so google it!
    - targetEvent(event) - this is how the controller function is triggered

https://material.angularjs.org/latest/demo/toast
Toast
    - similar to dialog




 */



/* Week 5 - Thursday */

/************* Group Project: Riddler ****************



 */

/***************** Full Stack W/ Angular and Mongo *******************

Setup Interface, html with NG
- test buttons
- toggle message(note) input
- test ng-repeat (before connecting to DB or server with client side(controller) array)

ng-if="MC.name" on section, hides the section unless a name has been entered
- in this instance ng-show would work the same way.





 */

/****************** Deployment with Heroku ***********************

https://devcenter.heroku.com/articles/heroku-cli

https://github.com/mhwalsh/lecture-guides/blob/master/heroku-pSQL-deploy.md

From Terminal
    heroku login - prompts for credentials
    heroku create [app name] - creates a heroku.app
    heroku open - should open the app in the browser
    heroku logs --tail(or -t)  - waits for new logs to come in and keeps adding them to the log as they come in

    git remote -v  - will now show both git urls and 2 heroku urls

    git push heroku master  - this will push to the heroku repo


    after pushed, then the port needs to be updated on server.js
    heroku gives us a port and puts it in an environment variable
    depending on the environment the port can dynamically change
    .env files
    or on heroku it happens automatically so no file creation is needed

    var port = process.env.PORT || 6660;

Error R10 (boot Timeout) - 



 */


/* Week 5 - Wednesday */


/*************** Intro to Mongoose **************

npm install mongoose --save

create a js file for schema


POSTMAN
use server url
send raw JSON files after routes setup


[name]Shema.js

**** [name]Shema.js ****
var mongoose = require('mongoose');
var Schema = mongoose.Schema

// creating new schema
// name of fields/property : type and any requirement
new Schema({
    name: String, // if just defining the type then only needs the type
    username: {type: String, unique: true, required: true}, // this is a unique string so it takes an object
    admin: Boolean,
    meta: { // this is a sub document 
        age: Number, // property of my choosing, but Number defines the value
        website: String
    },
    created_at: new Date()
})

// 1st param is collected
// 2nd param is

var User = mongoose.Model('users', userSchema);

**** server.js ****
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var userRouter = 
// this line is not needed as it's used in the schema
var mongoose = require('mongoose');

// this creates the DB if it does not already exist
// may not create DB until something is inserted
mongoose.connect('mongodb://localhost:2717/canopusUserDb');
// the .connect method is old now

app.listen(3000, function(){
    console.log('listening on: 3004');
});


***** userRouter.js ****
var router = require('express').Router();
// pull in User schema 
var User = require('../models/userSchema');

router.get('/', function(req, req) {
    console.log('in user get route');

    User.find({}, function(err, userResults) {
        if(err){
            console.log('get error ', err);
            res.sendStatus(500);
        } else{
            console.log('userResults, userResults);
            res.send(userResults);
        }
    }) 
})

// PUTTING A ? after /:username? makes the param optional
// could use this in conjunction with an if else to change the query string

router.get('/:username', function(req, req) {
    console.log('in user get route');
    var searchName = req.params.username;
    User.find({username: searchName}, function(err, userResults) {
        if(err){
            console.log('get error ', err);
            res.sendStatus(500);
        } else{
            console.log('userResults, userResults);
            res.send(userResults);
        }
    })
})

router.post('/', function(){
    console.log('in user post route');
    var userAccount = new USER({
        name: req.body.name,
        username: req.body.username,
        admin: req.body.admin
    });

    console.log(userAccount);

    // saves/inserts user into collection
    userAccount.save(function(err){
        if(err) {
            console.log('User POST error ', err);
            res.sendStatus(500);
        } else {
            console.log('user created!');
            res.sendStatus(201);
        }
    });
    res.sendStatus(201);
});

module.exports = router;


 */


/*********** Mongo DB **************

Install Guide
https://github.com/mhwalsh/lecture-guides/blob/master/mongo-install.md

Intro Guide
https://github.com/mhwalsh/lecture-guides/blob/master/intro-mongo.md

Mongo Documentation
https://docs.mongodb.com/manual/core/document/


Pure Mongo
- does not use a schema
- very flexible

Mongoose
- More of a middle ground between SQL and Mongo
- allows defined data types
- supports a schema

DOCUMENTS
SQL rows in mongo are called (or are similar to) documents
COLLECTIONS
SQL tables in mongo are called (or are similar to) collections

PURE MONGO
    from terminal
    mongo - starts mongo shell 
    use [db name] - if it does not exist then this also creates the DB
    - db.[collection name].[CRUD Verb]
    create - same as CREATE TABLE in SQL
    insert - same as CREATE and INSERT in SQL
    find - same as SELECT in SQL
        find({[object with dot notation or object in an object]}) - same as WHERE in SQL
    update - same as UPDATE in SQL
    deleteMany - similar to DELETE in SQL
    deleteOne  - similar to DELETE in SQL
    remove - similar to DELETE in SQL

    uses JS objects
    db.users.insert(
        {
            username: "hunter138",
            active: true,
            created: new Date(),
            name: {first: "hunter", last: "rancourt"}
        }
    );

    .find().pretty() - this makes the terminal much easier to read

    $and - similar to AND in SQL
        db.users.find( { $and: [{"name.first": "millie"}, {"name.last": "walsh"} ] } );

    $or - similar to OR in SQL
        db.users.find({$or: [ {age: 27}, {username: "john7"} ] });

    $exists
        db.users.find({family :{$exists: true}});

    $gt - selects things with a value greater than
        db.users.find({age: {$gt:20}});

    $lt - selects things with a value less than
        db.users.find({age: {$lt:60}});



MONGOOSE
    SAVE - same as CREATE in SQL or INSERT in Pure Mongo


 */



/* Week 5 - Tuesday */

/********** High Five Off **********

characters are assigned a skill (random num gen on service)
Button to high five them (random number gen to compare with character skill on service?)
how many succesful high fives for each char( on characters controller)
how many total high fives (on service)

RANDOM NUM GEN (same func)
on page load generate char skill
on button click generate quality

 */


/**************** Angular Services **************

View Controller Model
    View - what user sees
    Controller - connection between DOM(view) and service(Model)
    Model - shared data, $http (talks to server)

In services directory
**** thing.service.js ****
myApp.service('ThingService', function( ) {

    var vm = this; (commonly written as var self = this;)

    // static
    vm.array = [1, 2, 3];

    // dynamic - must be in an object
    vm.countObj = {count: 0};

    vm.incCounter = function( ) {
        vm.countObj.count ++;
    };

});

Source services before controllers after client.js on index.html
- this doesn't make a difference in practice, but logically it makes sense

from a controller the array can be referenced by injecting it into the anonymos function
**** controller.js ****
myApp.controller('ControllerName', function( ) {
    var vm = this;
    // sets the value of the service to a value of the controller
    vm.array = ThingService.array;

    vm.countObj = ThingsService.countObj;

    vm.clickUpdate = function( ) {
        ThingsService.incCounter();
    }

});


DYNAMIC DATA MUST BE IN AN OBJECT


to get info from server use service

self.serverThings = {list: []};

$http.get('serverThings').then(function(response) {
    self.serverThings.list = response.data;
});



 */

/******************* Taylor Time **********************

Twitter 
- have a professional account
- follow others in dev community
- don't have things public that you are not willing to talk about
Example: antoinette smith (code switch, blacks in tech)

Slack
- a lot of meetups have slack channels


 */

/****************** Angular Program Structure and Angular Router ***************
 
https://github.com/mhwalsh/lecture-guides/blob/master/angular-router.md

AKA client side routing

** new directory layout **
Public
    Views
    Scripts
        Services
        Controller
            controller.js
    Styles
    Vendors
    index.html

Angular Router must be npm installed

npm install angular-route

Millie installs angular, and angular-route using npm and then copies them to vendors

When sourcing files on index.html do them in this order

angular
angular route
client.js - must source before controllers
controller 1
controller 2

ng-view
- an html element that indicates where content can be dynamically swapped in and out
    <ng-view></ng-view>

**** client.js ****
myApp.config(function($routeProvider) {
    $routeProvider.when('/' {
        templateUrl: 'views/home.html'.
        controller: 'HomeController as hc'
    })when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController as bc'
    }.otherwise({ redirectTo: '/'}); 
});

**** home.js ****
myApp.controller('HomeController', function( ) {
    console.log('in HomeController');
});

**** home.html ****
<!-- does not need the controller here as it is assigned on client.js -->
<section>
    This is a home page
</section>

**** blue.html ****
<section>
    This is a blue page
</section>

**** index.html *****
<nav>
    <li>
        <a href="!#/blue">blue</a>
    </li>
    <li>
        <a href="!#/">home</a>
    </li>
</nav>
<ng-view></ng-view>


# is used to show client routes in the url
localhost:5000/#/ = home

!#/ is used on anchor elements in the nav to reference the routes


Remove # in the URL
    ** keep in mind that this will not distinguish server side routes vs  client side routes

**** index.html ****

<base href="/";
<!-- update nav bar -->


**** client.js ****
// add $locationProvider as a parameter of myApp.config
myApp.config(function($routeProvider, $locationProvider) {

})

// after otherwise 
$locationProvider.html5Mode(true);

**** server.js ****
// add path
var path = require('path');

// all routes are handled by this if there are not other routes above it in the file
app.get('/*', function(req, res) {
    res.sendFile(path.resolve('index.html'));
});


alternate config properties
tempalte: '<div>html here</div>,
controller: 'ControllerName',
controllerAs: 'cn'



 */



/* Week 5 - Monday */

/*************** Weekend Challenge 4 Live Solve *****************

/Users/hunter/Repos/prime/Projects/canopusWeekend4LiveSolve

https: //github.com/devjanaprime/canopusWeekend4LiveSolve

$index in ng repeat keeps track of the iterations of the loop (or repeat)
    make a function and then pass it $index 
        vm.toggleMe ($index) {
            // do something
        }

ng-hide / ng-show
    these share a single boolean so they can be used together to toggle things.


It is best practice to keep logic in the script rather then on the html

It really helps to make a list of what needs to be done and then make smaller lists for each list item so you can continue to see progression rather than feeling stuck


Heroku
 app.listen(process.env.PORT || 5000);
  -- Heroku picks a random port, so specifying one doesn't quite cut it. This line allows for heroku & localhost functionality.

*/



/* Week 4 - Thursday */


/************* $Scope and More Angular **************

https: //github.com/mhwalsh/lecture-guides/blob/master/angular-scope.md

using scope does not allow you to use the same name for a nested controller (probably saying this wrong)




 */



/* Week 4 - Wednesday */


/************** Lecture Block: VS Code Debugging, POST MAN, Nodemon ************

nodemon - node demon
- from terminal enter: nodemon server.js
- it reboots your server as soon as a change is made

POST MAN
- for testing routes(APIs) before building the client side
- best for use with POST, PUT, DELETE
** Would be a good idea to start doing server side setup first then testing with POST MAN

VS Code DeBugger
- Click Geear with orange dot
- set program to server file "program": "${workspaceRoot}/server.js"
- Add Configuration (node.js attach)
- change drop down to launch program
- click play

sources in chrome dev tools is similar to the debugger

*/


/************** Lecture: $http POST ***************

JQ - NG
$.ajax - $http
success - .then

bodyPArser.urlencoded - bodyParser.json()

if the post res is undefined then it needs bodyparser.json

ng-init""RC.getBAnds()" - in the HTML
- same as calling getBands() in the script

Things to checkout
- angular animate
- angular js tricks

 */


/**************** Lecture Block: pSQL Joins ****************
    https: //github.com/mhwalsh/lecture-guides/blob/master/sql-joins.md

** Join only reads data, it does not make a new table or edit existing tables, 
    it builds a temporary table to return for your query

SELECT * FROM left_table type JOIN right_table ON left_id=right_left_id;
or
SELECT * FROM staff [type] JOIN lectures ON staff_id=lectures_staff_id;
    - selects all things from the staff table [default type is INNER, if left blank] with the lectures table
        where column name is the same as column name
    For the example it would return all lectures associated to a staff members primary key


You can connect as many tables together as you need by chaining joins;

- ON DELETE CASCADE 
    - this can be added to columns on creation so when 
    referenced things are deleted it will clean up junction tables

- ON DELETE  SET NULL 
    - this sets a reference  back to null if the referenced table row is deleted

ADD COLUMN after table creation
- ALTER TABLE table_name ADD column_name column - definition;

LEFT JOIN
    - will return all values from left table and if they are not refrenced in the right table the values will show as null

** This shows that you can select multiple tables and columns with dot notation    
SELECT leftTable.columnName, rightTable.columnName
FROM AtableName

The data that comes after the select is whats actually getting returned 

Can also add a WHERE clause on the end to further limit the returned data

Can use agragate functions after the SELECT as well for example SELECT COUNT(*) ....
- this would return a number of how many rows are returned

After a join the right table is technically the left (if another join is used)


When adding new rows we'll want to return the id so it can be used in other referenced tables
INSERT INTO tableName (columnName) VALUE ([valueHere]) RETURNING id; 
- could also return *
- The result object in pg would be the id
- then you could run another query to INSERT rows into the related tables

 */



/* Week 4 - Tuesday */


/***************** Lecture Block: More Angular ********************
 https: //github.com/devjanaprime/canopusNG

 https: //github.com/Giphy/GiphyAPI

 https: //github.com/devjanaprime/giphyNgServices

canopusNG repo

$http - a service in angular                       |
- requires dependency injection to use             v
- myApp.controller('ReviewController', function ($http) {

- 

 */


/**************** Taylor Time ******************

Linked In
    write recomendations for others
    - keep it to about a paragraph
    - when you request someone else to write one let them know you're 
      writting them one as well and what you'll cover
    - 

    Connections
    - always add a note

    Certifications
    - team treehouse (there is an option to share on linked in)
    - code acadedemy (exclude prework courses)

    Following Companies
    - start following companies I like (use google docs)




 */

/*********** Intro to Data Modeling ************

Entity is a unit in a table that can be related to

Relationship Types
- 1 to 1 (ssn to person, state to capital)
- many to many (library to rare books, cohort to students)
- 1 to many (pet to owner, books to authors)

1 to many 
- changing the id of the related DB loses history, but avoids duplication
- to track history (use many to many)

many to many
- needs a hidden table (called a join table or junction table)
- the junction table is often omitted in ERD drawings
- the function table will list the relational ids of other tables
- the junction table can repeat ids
- one junction table per relationship (so typically to relational ids per junction table)
- if there are more columns they should only relate to the relationship of the two tables


** Group Activity **
Employer Table (1-M) Jobs Table
Jobs Table (M-M) Skills Table (junction table)
Talent Table (M-M) Jobs Table (junction table)
Talent Table (M-M) Skills Table (junction table)
Talent Table (M-1) Employer Table

 */


/* Week 4 - Monday */

/*************** Angular ***************

- source before script like jq

app - angularmodule - link to html elements
controller - link to html elements (each word caps and then abreviate as just caps in html)
ng expression - {{}} in an html doc is an angular expression
ng-model
ng-report
ng-click



 */

/************* Code Challenge 3 *******************

// in package.json the npm install will create this DB and execute the treats.sql file
 "postinstall": "createdb treatsDB; psql -d treatsDB -f treats.sql;",

 */

/************* Weekend Challenge 3 Live Solve **************

.gitignore
node_modules
*.DS_Store
*.log

instead of making a base route you can put index.html in public folder instead of views 
then make public static it will automatically serve index (this is just as good as making the route)


for attribute on a table need to be the same as an inputs id
    - this makes sure the label is associated with the input

// this is the minimum needed for pool
module.exports = new POOL({
    database: '[db name]
});

// formats the entire file to fix tabs etc
opt shift f

AJAX utility function
$.get('/tasks', function (res) {

});


can pass $(this) as a function argument

can have DB sort data based on values

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