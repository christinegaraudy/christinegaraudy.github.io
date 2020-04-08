////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) { //parameters start and end, with optional third param step
  var array = []; //make an empty array to push numbers into
  if(start === end) { //if the start and end numbers are the same, return an empty array
    return array;
  } else if (start > end) { //else if start number is greater than end number
    for(let i = start; i >= end; i--){ //backwards for loop
      array.push(i);
    }
  } else if (step >= 1) { //if step param is entered and its value is greater than or equal to 1
    for(let i = start; i <= end; i = i + step) { //set i to increment by step value
      array.push(i);
    }
    return array;
  } else if (step < 0) { //if step param is entered and its value is less than 0
    for(let i = start; i >= end; i = i - step) { //set i to decrement by step value
      array.push(i);
    }
    return array;
  } else {
  //make a for loop that begins at start input and ends at end input, inclusive of both
  for(let i = start; i <= end; i++){
  //push each number into the empty array 
    array.push(i);
  }
  return array;
  }
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numbers) { //one parameter numbers
  var result = 0; //make a counter that starts at 0
  for(let num of numbers) {//make a loop to iterate over numbers array
  result = result + num; //add each number element to result each iteration
  } return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) { //takes parameter input array
  var reversed = []; //make an empty array to push input array elements into
  for(let item of array) { //make a loop to iterate over input array 
    reversed.unshift(item); //add each item to beginning of reversed one by one using unshift
  }
  return reversed; //return new reversed array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace() {

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
