// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

    return function isGreater(value) {
        if (value > base) { //if value is greater than base
            return true; //return true
        } else { //if not
            return false; //return false
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
        return function isLesser(value) {
        if (value < base) { //if value is less than base
            return true; //return true
        } else { //if not
            return false; //return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

    return function(string) {
        //if the character at the 0 index of the input string made lowercase is the same as the startsWith input made lowercase,
        if(string.charAt(0).toLowerCase() === startsWith.toLowerCase()) { 
            return true; //return true
        } else { //if they're different
            return false; //return false
        }
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //

    return function(string) { //creates a function to return that accepts a given string
        if(string.charAt(string.length-1).toLowerCase() === endsWith.toLowerCase()) { //checks the character at the last index of the string and compares it to endsWith character
            return true; //if they're the same return true
        } else {
            return false; //if they're not the same return false
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
 //let modify = function(string) {
 //    return string.toUpperCase();
 //}
 
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

        //create empty array to collect modified results
        let modifiedArray = []; 
        
        //loop over all of the input strings
        for (let i = 0; i < strings.length; i++) {
             let str = strings[i]; //make a new variable to catch each string
             modify(str); //pass each string one at a time to modify function
             modifiedArray.push(modify(str)); //push modified string to new array modifiedArray
        }
         
        return modifiedArray;     //return completed new array, modified
        

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    let trueValues = []; //create empty array to catch strings that pass test and return true
    
    //loop over strings array 
    for(let i = 0; i < strings.length; i++) {
        let str = strings[i];
        test(str);  //pass each string to test function
        if (test(str) === true) {
            trueValues.push(test(str)); //pass true values to new array trueValues
        }
        
    }
    if (trueValues.length === strings.length) { //if trueValues.length === strings.length, allStringsPass returns true
            return true;
        } else {
            return false; //if not, allStringsPass returns false
        }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}