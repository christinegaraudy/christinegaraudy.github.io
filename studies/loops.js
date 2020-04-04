/*
LOOPS: Provide a concise way to perform an action repeatedly until some stopping 
    condition is met.
*/

// 1. The Different Kinds of Loops
    
/* A) While Loops: Useful when you know exactly when you want to stop.  Continues 
    looping WHILE some condition is true and stops when that condition becomes false. */
                
    // While Loop Counting Forward to 4
                
        let counter = 1; // where we are now
                
        while (counter < 5) { // how long we want to loop
            console.log(counter++); 
        } /* counter ++ is the action we want to happen after each loop. 
            changes the starting condition to prevent endless loop. */
                
    // While Loop Counting Backwards from 5 to 0
                
        let count = 5; // where we are now
                
        while (count > -1) { // how long we want to loop
            console.log(count--); 
        } /* count-- is action we want to happen after each loop. this time we're 
            decrementing, so it counts down. */
        
        
/* B) For Loops: Begins with starting condition, then provides stopping condition, 
    then incrementor or decrementor */
        
    // Looping Forward Over an Array
                
        var myArray = [1, 2, 3, 4, 5, 6];
                
        //start at index 0, while index is less than length of myArray, increment index
        for (let i = 0; i < myArray.length; i++) { 
            console.log(myArray[i]); // logs each element in the array one by one each 
        }                           // time it loops
                
    // Looping Backwards Over an Array
                
        var newArray = ['cats', 'seals', 'piglets', 'baby owls'];
                
        // start at final index of array, while index is 0 or greater, decrement index        
        for (let i = newArray.length - 1; i > -1; i--) { 
            console.log(newArray[i]); // logs baby owls, piglets, seals, cats
                }
        
// C) For In-Loops: Looping over an object
        
        var myObject = {
            color: 'purple',
            day: 'saturday',
            number: 3,
            cat: 'Lilly'
        };
                
        for (var key in myObject) { // for each key in myObject...
            console.log(key); // console log name of key. logs color, day, number, cat
        }
                
        for (var key in myObject) { // for each key in myObject...
            console.log(myObject[key]); //logs the value of key. 
        }                               //logs purple, saturday, 3, Lilly