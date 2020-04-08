////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//write a function called min that takes in two numbers for parameters
function min(a,b) {
  if (a < b){ //if the first number is smaller than the second
  	return a; //return the first number
  } else { //if not
  	return b; //return the second number
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*write a function called is even to test whether a given number is even. it takes 
one param, num, and returns a boolean*/
function isEven(num) {
  //find if number is negative
  if (num < 0) {
    return false;
  //Zero is even.
  } else if (num === 0) {
    return true;
  //One is odd.
  } else if(num === 1) {
    return false;
  } else {
     //For any other number N, its evenness is the same as N - 2.
    return isEven(num -2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*write a function called countChar that behaves like countBs, except it takes a 
second argument that indicates the character that is to be counted*/

function countChars(string, character) {
  //make a counter variable to keep track of our place
  let counter = 0;
  //make a loop to iterate over the input string
  for (let i = 0; i < string.length; i++) {
  //if the character at the current index of string is equal to input character
    if(string.charAt(i) === character) {
  //increase counter
      counter++;
    }
  }
  //return counter
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*Write a function countBs that takes a string as its only argument and returns a 
number that indicates how many uppercase “B” characters there are in the string.*/

function countBs(string) {

  
  //create an array to push uppercase Bs into
  let arrayB = [];
  
  //loop over string
  for (let i = 0; i < string.length; i++){
    
    //create a variable to catch each character in string
    var current = string[i];
    
    //if the current index of string is equal to an uppercase B
    if (current === 'B') {
      
      //push it into new array
      arrayB.push(current);
    }
  
  } 
  //return length of new array
  return arrayB.length;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
