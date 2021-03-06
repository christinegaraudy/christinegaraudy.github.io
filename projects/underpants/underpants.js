// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {}; //we have initialized _ and assigned it the value of object


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(input) { //accepts any value as parameter
    if(Array.isArray(input) === true){ //if it's an array, return 'array'
        return 'array';
    } else if(input === null) { //if it's null return 'null'
        return 'null';
    } else if(typeof input === 'string'){ //if it's a string, return 'string'
        return 'string';
    } else if(typeof input === 'undefined'){ //if it's undefined return 'undefined'
        return 'undefined';
    } else if(typeof input === 'boolean'){ //if its a boolean, return 'boolean'
        return 'boolean';
    } else if(typeof input === 'number'){ //if it's a number, return 'number'
        return 'number';
    } else if(typeof input === 'function'){ //if it's a function return 'function'
        return 'function';
    } else { //if it's none of the object, it's an object, so return 'object'
        return 'object';
    }
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (array, number) {
    if(Array.isArray(array) === false) {
    //Use Array.isArray() to check if array is an array. If it is not, return
    //an empty array literal.
        return [];
    } else if(typeof number !== 'number') {
    //Use typeof to check if number is a number. If it is not or if number is
    //undefined, return the first element in array.
        return array[0];
    } else if(number < 0) {
    //If number is negative, return an empty array literal.
        return [];
    } else if(number > array.length) {
    //If number is greater than the length of the array, return the whole array.
        return array;
    } else {
    //Else, return the first <number> items of array. Use slice to complete this.
        return array.slice(0, number);
    }
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){ //accepts an array and a number
    if(Array.isArray(array) === false){ //if it's not an array, return empty array literal
        return [];
    //if it's not null or undefined or a number, return the last element in the input array    
    } else if(number === null || number === undefined || typeof number !== 'number'){ 
        return array[array.length - 1];
    } else if(number > array.length){ //if input number is bigger than length of given array return whole array
        return array;
    } else if(number < 0){ //if input number is negative, return empty array literal
        return [];
    } else { //else, return the indices from the given number to the end of the array
        return array.slice(array.length - number, array.length);
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    //Use a for loop to iterate through array to return the index of the 
    //first occurence of value.
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
    }
    //If value is not in array, return -1.
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (array, value) { //accepts an array and a value
    //using ternary operator, return true if array contains value, false if not
    return (array.includes(value)) ? true : false; 
};


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){ //accepts a collection and a function
    if(Array.isArray(collection)){ //if the collection is an array
        for(let i = 0; i < collection.length; i++){ //iterate over the array
            //and apply function with arguments of element, index, and collection to every element
            func(collection[i], i, collection); 
        }
    } else if(collection !== null || typeof collection === 'object'){ //if it's an object 
        for(var key in collection){ //iterate over object
            func(collection[key], key, collection); //apply function for each property with arguments value, key, collection
        }
    }

};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    //create new empty array to push values into
    let newArray = [];
    //iterate over input array
    for(let i = 0; i < array.length; i++) {
        if(newArray.indexOf(array[i]) === -1) { //if the current array element passed to indexOf is equal to -1
            newArray.push(array[i]) //push into new array
        }

    }
    return newArray; //return new array
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){ //accepts an array and a function
    //create an empty array
    var trueArray = [];
    //iterate over the input array
    for(let i = 0; i < array.length; i++) {
        //if the result of passing the current element, its index, and the entire array to the function evaluates to true
        if(func(array[i], i, array) === true){ 
            trueArray.push(array[i]); //push it into result array
        }
    }
    return trueArray; //return result array
};
    

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// _.reject = function(array, func){ //accepts an array and a function
//     //make an empty array
//     var falseArray = [];
//     //iterate over the input array
//     for (let i = 0; i < array.length; i++){
//         //if passing current element, its index, and the entire input array evaluates to false
//         if(func(array[i], i, array) === false){ 
//             falseArray.push(array[i]); //push it into false array
//         }
//     }
//     return falseArray; //return false array
// };

_.reject = function(array, func){ //takes an array and a function
  return _.filter(array, function(element, index, array){ //uses filter loop over array and to apply function to element, index, and whole array each iteration
    return func(element, index, array) === false; //return an array of those elements that evaluated to false when passed to the input function
  });
};  

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
    //make two empty arrays, one for true values, one for false values
    var truthyArray = [];
    var falsyArray = [];
    //loop over input array
    for(let i = 0; i < array.length; i++) {
        //An array that contains all the values for which <function> returned something falsy
        if(func(array[i], i, array) === false){
            falsyArray.push(array[i]);
        //An array that contains all the values for which <function> returned something truthy
        } else if(func(array[i], i, array) === true){
            truthyArray.push(array[i]);
        }
    }
    //make an empty array into which to push both truthy and falsy arrays
    var fullArray = [];
    fullArray.push(truthyArray, falsyArray); //push em
    return fullArray; //return fullArray
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    var aNewArray = [];
    if(Array.isArray(collection)){ //if the collection is an array
        for(let i = 0; i < collection.length; i++){ //iterate over the array
            //and apply function with arguments of element, index, and collection to every element
            var arrayFunc = func(collection[i], i, collection); 
            aNewArray.push(arrayFunc); //push the value of each function call into the new array
        } 
    } else if(collection !== null || typeof collection === 'object'){ //if it's an object 
        for(var key in collection){ //iterate over object
            var objFunc = func(collection[key], key, collection); //apply function for each property with arguments value, key, collection
            aNewArray.push(objFunc); //push the value of each function call into the new array
        }
    }
    return aNewArray; //return the new array
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, property){ //take in an array and a property

    return _.map(array, function(element, index, array){ //use map to iterate over the array and call function for each of its element
        return element[property]; //save the return value of each function call and return the new array
    });
     
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func){ //takes in a collection and a function
    var bool = true; //make a variable bool, default set to true
    if(Array.isArray(collection)){ //test if collection is array
        if(func == null || func === undefined) { //if array, and no function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the collection
                if(collection[i] === false) { //if collection contains a falsy element
                    bool = false; //change bool to false
                    return bool; //return bool (false)
                }
            }
            return bool; //if no function provided, and no elements evaluate to falsy, return bool as true
        } else { //otherwise, if there is a function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the array function to every element its index, whole collection
                if(func(collection[i], i, collection) === false) { // if one element evaluates to false 
                    bool = false; //change bool to false
                    return bool; //return bool
                }
            }
        }
        return bool; //if no elements evaluate to false, return bool as true
    } else if(collection !== null || typeof collection === 'object'){ //else if the collection is an object
        for(var key in collection){ //iterate over the object and apply function to current value, current key, whole collection on each iteration
            if(func(collection[key], key, collection) === false) { //if one of the elements evaluates to false
                bool = false; //change bool to false
                return bool; //return bool as false
            }                
        }
        return bool; //if no elements evaluate to false, return bool as true
    }
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func){ //takes in a collection and a function
    var bool = false; //make a variable bool, default set to false
    if(Array.isArray(collection)){ //test if collection is array
        if(func == null || func === undefined) { //if array, and no function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the collection
                if(collection[i] === true) { //if collection contains a true element
                    bool = true; //change bool to true
                    return bool; //return bool (false)
                }
            }
            return bool; //if no function provided, and no elements evaluate to falsy, return bool as true
        } else { //otherwise, if there is a function provided
            for(let i = 0; i < collection.length; i++){ //iterate over the array function to every element its index, whole collection
                if(func(collection[i], i, collection) === true) { // if one element evaluates to true 
                    bool = true; //change bool to true
                    return bool; //return bool as true
                }
            }
        }
        return bool; //if no elements evaluate to false, return bool as true
    } else if(collection !== null || typeof collection === 'object'){ //else if the collection is an object
        for(var key in collection){ //iterate over the object and apply function to current value, current key, whole collection on each iteration
            if(func(collection[key], key, collection) === true) { //if one of the elements evaluates to true
                bool = true; //change bool to true
                return bool; //return bool as false
            }                
        }
        return bool; //if no elements evaluate to true, return bool as false
    }
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
    //call function for every element in array
    if(seed != null && seed !== undefined){
        var previousResult = seed; //on first iteration use seed as "previous result"
        for (var i = 0; i < array.length; i++){
            //on every following iteration use the return value of the last iteration as the previous result
            previousResult = func(previousResult, array[i], i); //pass it the arguments previous result, element, index
        }
    } else if(seed == null || seed === undefined){
         previousResult = array[0];  //if no seed is given use the first element of array as the seed, then continue to the next element
        for (var i = 1; i < array.length; i++){
            previousResult = func(previousResult, array[i], i); //pass it the arguments previous result, element, index
        }
    }
    return previousResult; //after the final iteration, return the return value of the final function call
};


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object1, object2, ...objects){ //accepts any number of object parameters
    var result = Object.assign(object1, object2, ...objects); //assigns all additional objects' properties to first object
    return result; //return new object, which contains all object properties
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
