// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//flattens two dimensional array into single array
//must use reduce() and concat()

function flatten(array) { //the function accepts one parameter of a nested, multi-dimensional array
//declare an empty array to be assigned to result 
  var flattened =
//pass the concat() method to reduce() and reduce() will loop and run concat() on each element in array
  array.reduce(function (accumulator, currentValue) {
    return accumulator.concat(currentValue); //on each iteration, the accumulator will be concatenated 
  });                                       //with the current value and added to flattened array
  return flattened; //return flattened array
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Write a higher-order function loop that provides something like a for loop statement. 

function loop(start, test, update, body) { //takes a starting value, a test, an update function, and a body function
  //(EQJS says to use a regular loop)
  //start at the value given to the function; if value passed to test evaluates as true, update value and start looping over again
  for (let value = start; test(value); value = update(value)) {
    body(value); //give the current value to the body function
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// Write a function using every to see if every element in an input array passes a given test
/* Every method will return true if all the elements pass the set. Once an element that fails 
the test is found, the method returns false */

function every(array, test) {
   //write a loop to iterate over every element in the input array
  for (let i = 0; i < array.length; i++) {
    //if an element is not equal to the test, return false and exit loop
    if(test(array[i]) !== true) { 
      return false;
    }
  }
   return true; //if it never finds a false value, return true
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//Write a function that computes the dominant writing direction in a string of text.
//implement characterScript and countBy, as instructed in book

function characterScript(code) { 
  for (let script of SCRIPTS) { //iterates over all of the scripts in scripts array
    if (script.ranges.some(([from, to]) => code >= from &&
                                           code < to)) {
      return script; //returns an array of objects, each of which names a group and 
    }               //tells you the number of elements that were found in that group
  }
  return null; //if none found, return null
}

function countBy(items, groupName) {
  let counts = []; //make an empty array to push each count into
  for (let item of items) { //loop over characters
    let name = groupName(item); 
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) { //count the characters that belong to each script
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function dominantDirection(text) { //accepts a string of text
  let scripts = countBy(text, char => { //uses countBy
    let script = characterScript(char.codePointAt(0)); //uses characterScript to see if the character is found
    return script ? script.direction : "none"; //return the direction key value if found, if not return none
  }).filter(({name}) => name != "none"); //if there is a name, check against the following cases
  switch (scripts.length) { //check the length of scripts
    case 0:
      return 'no dominant direction found'; //can't find a match
    case 1:
      return scripts[0].name; //return the name of the script
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) { //if iterating over scripts and accum count is the same as current count 
        return 'no dominant direction found'; //return no dominant dir found
      } else { 
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name); //iterate over all of the scripts
      }                                                   //if accum count is greater than or equal to current count return accum name
  }                                                      //if not return current name
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
