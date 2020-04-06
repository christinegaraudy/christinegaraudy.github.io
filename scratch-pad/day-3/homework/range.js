// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    //create an empty array to catch range numbers
    let rangeArray = [];
    
    //make sure first number is smaller than second
    if(start < end) {
    
    //create for loop to give numbers from start to end, inclusive
       for (let i = start; i <= end; i++) { 
    
    //push those numbers into empty array
        rangeArray.push(i);
    }
    return rangeArray;
    
    //catch case for if first number is larger than second
    } else if (start > end) {
        
        //create for loop decreasing numbers by one each time and pushing them into new rangeArray
       for(let i = start; i >= end; i--) {
           rangeArray.push(i);
       } 
       return rangeArray;
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}