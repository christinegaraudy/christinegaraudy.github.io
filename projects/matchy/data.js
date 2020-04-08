/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = { }; //make an empty object called animal
animal.species = 'cat'; //using dot notation, add species property to animal with value cat
animal['name'] = 'Oscar'; //using bracket notation, add a name property with value Oscar
animal.noises = [ ]; //create an empty array for noises property in animal
console.log(animal); //logs { species: 'cat', name: 'Oscar', noises: [] }




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = []; //create empty array assigned to variable noises
noises[0] = 'meow'; //use bracket notation to add meow at 0th index
noises.push('purr'); //push another element into noise
noises.unshift('growl'); //use unshift to add another noise element at beginning of array
noises[noises.length] = 'woof'; //use bracket notation to add another noise element at the end 
console.log(noises.length); //logs 4
console.log(noises[noises.length - 1]); //logs woof
console.log(noises); //logs growl, meow, purr, woof


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises; //add noises array to noises property in animal
animal.noises.push('yelp'); //push yelp to animal's noises array
console.log(animal); //logs { species: 'cat', name: 'Oscar', noises: [ 'growl', 'meow', 'purr', 'woof', 'yelp' ] }

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
        There are two ways to access properties in objects: through bracket or
        dot notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
        Array elements can only be accessed with bracket notation.
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create empty array assigned to animals
var animals = [];
animals.push(animal); //push animal into animals

//create duck object and assign it specified data
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 
            'honk', 
            'sneeze', 
            'woosh'] 
    
};

animals.push(duck); //push duck into animals array
console.log(animals); //logs cat and duck info

//create two more animal objects with the same properties as cat and duck
var dog = {
    species: 'dog',
    name: 'Annie',
    noises: ['bark',
            'woof',
            'yawn',
            'whimper',
            'sniff']
};

var owl = {
    species: 'owl',
    name: 'Steven',
    noises: ['hoot',
            'chirp',
            'whistle',
            'shriek']
};

animals.push(dog, owl); //push dog and owl into animals array
console.log(animals); //logs all data for cat, duck, dog, and owl
console.log(animals.length); //logs 4




//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** I'm choosing an array because it would make the most sense to have
 * an ordered list, especially considering it will need to be randomized in the subsequent exercises. 
 */

// create empty array for list of friends 
friends = [];
// create function getRandom that takes an array
function getRandom(array) {
// function returns random array element: Math.random * length of array gets a number between 0 and array length
// Math.floor resolves the number to an integer between 0 and array.length-1 (inclusive). Return out of the function
    return Math.floor(Math.random() * array.length);
 }
// function call to var names index for portability
var index = getRandom(animals);
// push into friends array the following: the name key's value of an animal from the array selected at 
// random using index produced by function 
friends.push(animals[index]['name']);
// print friends array to check 
console.log(friends);
// assign duck a new key of 'friends' with a value of list in array called friends
duck['friends'] = friends;
// print animals array to check
console.log(animals); 

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}