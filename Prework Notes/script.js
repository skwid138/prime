/*jQuery */

.animate()
// takes two inputs: the animation to perform, and the time in which to perform the animation. Here's an example:
$(document).ready(function() {
  $('div').animate({left:'+=10px'},500);
});
// This will take the first div it finds and move it ten pixels to the right. Remember, increasing the distance from the left margin moves something to the right; the += bit is just a shorthand for "take the existing number and add ten to it." In this case, it add ten pixels to the current distance from the left margin.

.keydown()
// triggered whenever a key on the keyboard is pressed. It only works on whatever page element has focus, so you'll need to click on the window containing your div before pressing a key in order for you to see its effects.

.focus()
// an element has focus when we click on it or tab over to it. If you've ever filled out a form on a web page and seen how each text box lights up when you tab to it or click on it, you've seen focus in action!
// The .focus() event handler only works on elements that can receive focus—the list of these elements is a bit vague, but HTML elements like <textarea>s and <input>s are the usual suspects.

.dblclick()
// for double clicks

.on()
// a general handler that takes the event, its selector, and an action as inputs. The syntax looks like this:
$(document).on('event', 'selector', function() {
  Do something!
});
// In this case, 'event' will be 'click', 'selector' will be '.item', and the thing we'll want to do is call .remove() on this.

.val()
// is used to get the value of form elements. For example, $('input:checkbox:checked').val();
// would get the value of the first checked checkbox that jQuery finds.

.html()
// can be used to set the contents of the first element match it finds. For instance, $('div').html(); 
// will get the HTML contents of the first div it finds, and $('div').html("I love jQuery!");
// will set the contents of the first div it finds to "I love jQuery!"

.css()
// takes two inputs: the first is the CSS element to alter, and the second is the value to set it to.

.height()
.width()
// functions that can be used to change the heights and widths of HTML elements.

$(document).ready(function() {
  $("div").height("200px");
  $("div").width("200px");
  $("div").css("border-radius", "10px");
});


.toggleClass()
// if the element it's called on has the class it receives as an input, .toggleClass() removes that class; if the target element doesn't have that class, .toggleClass() adds it.

.addClass()
.removeClass()
// can be used to add or remove a class from an element. This is great if, for example, you have a highlighted class that you want to apply to an element when clicked.
$('selector').addClass('className');

.empty()
// deletes an element's content and all its descendants. For instance, if you .empty() an 'ol', you'll also remove all its 'li's and their text.

.remove()
not only deletes an element's content, but deletes the element itself.

/* this */

// The this keyword refers to the jQuery object you're currently doing something with. Its complete rules are a little tricky, but the important thing to understand is if you use an event handler on an element—that's the fancy name for actions like .click() and .mouseenter(), since they handle jQuery events—you can call the actual event that occurs (such as fadeOut()) on $(this), and the event will only affect the element you're currently doing something with (for example, clicking on or mousing over).
$(document).ready(function() {
  $('div').click(function() {
      $(this).fadeOut('slow');
  });
});


// $() tells the browser to select a jQuery object, this could be the entire webpage, a class, an id, or any html element (p, div, h1, etc.)
$([location]).[action]();
// (aka 'event handler') the action is a jquery action or function, for example you could write 
$('button').click();
// this would say when any button is clicked do whatever is in the ()

// the below says when the html document is loaded run anything in parenthese (which is nothing in the example)
$(document).ready();

/*Objects... Again*/

// you can access private variables through public methods
// (a method is a function in an object)
// if the return from the methos is var instead of this then it would
// aslo be private

// If you want a variable to be hidden in an object rather then public
// it must be declared in the object, see below example
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
}

// create your Person
var john = new Person('john', 'snow', 20);

// try to print his bankBalance
console.log(john.bankBalance);



// inheritence is how a class can get properties from another
// if X is a Y then use inheritence (ie Penguin's are animals)

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

// constructor objects are referred to as classes
// In general, if you want to add a method to a class such that all members of the class can use it, we use the following syntax to extend the prototype:

className.prototype.newMethod = function () {
  //code here;
};


// this prints out the values for each property
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties
for (var key in nyc) {
    console.log(nyc[key]);
}

// examples of how to use hasOwnProperty
var suitcase = {
    shirt: "Hawaiian"
};

// console.log(suitcase.shorts);

if (suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);
} else {
    suitcase.shorts = 'almost too short';
}

var myObj = {
    // finish myObj
    name : 'hunter'
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


/*HTML Tables*/
// format
// <table>
//   <thead>
//     <tr> // this is a row in the table
//       <th colspan="5"></th> // this spns 5 columns on the top of the table
//     </tr>
//     <tr>
//       <th> // these represent the top cell of each column
//       </th>
//       <th>
//       </th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr> // these represent rows under the top cells
//       <td></td> // this represents data in the table
//     </tr>
//     <tr>
//       <td></td>
//     </tr>
//   </tbody>
// </table>


/*Objects*/

// this

// using this you can make methods apply to many objects
// this is a place holder and (at least for this example) refers to the object called with the method

var setAge = function (newAge) {
  this.age = newAge;
};

// this means that anytime I use me.setAge(), this.age in the setAge method will refer to me.age
me.setAge = setAge;

me.setAge(27);

// to further help me understand this
var me = {
  name : 'Hunter',
  age : 25,
  setAge : setAge
};

// a method is similar to a function, see example below
me.setAge = function (newAge) {
  me.age = newAge;
};
// to use this
me.setAge(26);


// object literal example
var me = {
  name : 'Hunter',
  age : 25
};

// object contructor example
var me = new Object();
me.name = 'Hunter'; // this is the shorthand method of what is being done below
me['age'] = 25;


/*switch*/

// switch can be used in place of if/exclusive
//
//   switch (varName) {
//     case 'caseName':
//       //do something
//     case 'anotherCaseName':
//       //do something else
//     defult:
//       // if the input does not match the above define case names then do this
//   }
// }


/*
console.log( 'Hello World from Prime!' );


var testVar = 'some value';

console.log(testVar);

// typeof [varName] will return if it's a num, string, or boolean

*/

/*
var clicks = 0;
var tau = 6.28318;

// not sure why we make the function a variable rather than declare the function
//function addClick (){};

var addClick = function( ) {
  console.log( 'in addClick');
  clicks++; //increments "clicks variable"
  console.log( 'clicks:', clicks );
  // check if greater than tau
  console.log( isGreaterThan( clicks, tau ));
}; // end addClick

var isGreaterThan = function ( number0, number1 ) {
  if ( number0 > number1) {
    return true;
  } else {
    return false;
    // If else isn't written here it returns undefined in the console
  }
};

// this function can now be used over and over
isGreaterThan( 120, 1);
*/

/*
 Arrays - video 7/9

when refrencing the first index item it is called the 0th (zero-ith) or sub 0
*/

/*Prototypes

// Constructor Function
function Dog ( name, breed, tricksArray) {
  this.name = name;
  this.breed = breed;
  this.tricks = tricksArray;
  this.paws = 4;
  this.domesticated = true;
  this.bark = function( ) {
    alert( "Hey! There might be something over there!");
  }
}

var puppy = new Dog( 'Banjo', 'Pitbull', ['sits', 'lays down', 'stays']);

console.log( puppy );

console.log("My dog's name is " + puppy.name);
puppy.bark();

yourDog = new Dog("Lola", 'Cattle Dog', ['Dance', 'Roll Over']);

console.log(yourDog);
*/

/*Prototypes Part 2

var dogQuote = "Woof! woof! grrr..";

// this looks at string prototype
console.log(Object.getPrototypeOf(dogQuote));

console.log(dogQuote.length);

//methods are functions and need to be followed by ()
console.log(dogQuote.toUpperCase());

var dogHouse = {
  location: 'backyard',
  heightInFeet: 2
};

dogHouse.color = "red";

console.log(dogHouse);
*/

// this is adding a new method to the string prototype called 'wharAreYou'
// it is a function so when calling it () must follow
String.prototype.whatAreYou = function() {
  console.log('I am a string!');
};

var song = "Happy Birthday song";

song.whatAreYou();
