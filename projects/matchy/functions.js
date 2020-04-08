/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*implement a function declaration called search that takes two parameters: animals
array and a string representing animal name*/

function search(animalArray, nameString) {

/*Look through the `animals` Array, and returns the animal's Object if an animal 
with that name exists*/  
//make a loop to iterate over animalsArray
    for (var i = 0; i < animalArray.length; i++) {
        var animalObject = animalArray[i];
       //if the name at the current index of animalsArray is equal to nameString input 
        if (animalObject['name'] === nameString) {
            //return the object at that index in animalArray
            return animalObject;
        //if not, return null    
        } 
    }
    return null;
};

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*write a function declaration called replace that takes 3 parameters, an Array of 
animals, a String representing  the name of an animal on which to perform a search, 
and an Object that represents the replacement animal.*/

function replace(animals, name, replacement) {
    //write a for loop to go through animals array elements
    for(var i = 0; i < animals.length; i++){
        //make a variable to grab the element at each array index
        var animalElement = animals[i];
    //for each array element, if the name value matches the input name string, 
        if(animalElement['name'] === name){
        //replace its entire array element with the replacement object 
        animals.splice(animalElement, 1, replacement);
        }
    }
    //Otherwise do nothing. (outside the for loop)
};




//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
 * Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
 * If an animal with that name exists within the `animals` Array, remove it. */
// write a function called remove that takes parameters animals (an array) and name string to perform a search on.
function remove(animals, name) {
// loop over animals array
    for (var i = 0; i < animals.length; i++) {
// make var to grab each element at array index
        var animalName = animals[i];
// if animal's name matches input name...
        if (animalName['name'] === name) {
// remove entire object (array element)
            animals.splice(animalName, 1);
        }
    }
};



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.*/

function add(animals, animal) {
    //Checks that the animal Object has a `name` property with a length > 0.
    //if animal object has own property name and that name is greater than 0
    if (animal['name'].length > 0 && animal['species'].length > 0) {
    //make a for loop to go over animals array
        let count = 0;
        // while loop to go through animals array
        while(count < animals.length) {
            //if animal name does not equal any name found in animals array
            if(animals[count]['name'] !== animal['name']) {
                // push new animal object into animals array
                animals.push(animal);
                // break statement to prevent infinite loop
                break;
                // else
            } else {
                // increment iteration and re-loop
                count += 1;
                // break out of while loop 
                break;
            }
        }
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
