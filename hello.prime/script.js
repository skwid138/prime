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

/*Prototypes*/

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
