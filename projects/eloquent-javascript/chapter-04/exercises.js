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

function reverseArrayInPlace(array) {
  //start at the 0 index of the array
  //get to the middle of the array

  //make a loop that iterates over half of the input array
  //use Math.floor to round down and preven it from trying to move middle element in an odd-length array
  for(var i = 0; i <= Math.floor((array.length - 1) / 2); i++) { 
  //with each interation, swap the first and last element and continue to do so as you move inward
  //(swap the element at position i with the one at position array.length - 1 - i)
    let element = array[i];   //make a variable to hold the element at the current index
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = element;
  }
  return array; //return the array, reversed
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //declare an empty variable list to push elements into
  var list = null;
  //loop over array backwards because eloquent js said so
  for (let i = array.length - 1; i >= 0; i--) {
  //for each element add it to object list
  //set up the structure of list with placeholders for elements to be pushed into
   list = {value: array[i], rest: list}; //will add element at current index of array and then return to list to add the next one
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = []; //make an empty array in which to push list elements
  //loop over the elements in list
  for (let node = list; node; node = node.rest) {
    array.push(node.value); //each iteration, push the value of each node into array one by one
  }
  return array; //return the array with new values from input list
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//inserts value into list before all other elements
function prepend(value, list) { //accepts two parameters value and list
  return {value, rest: list}; //inserts value into list at the first position
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//return the n-th value in a given list
function nth(list, number) { //takes a list and a number
//return the element at the given position in the list
  return listToArray(list)[number];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//takes two values and returns true only if they are the same value or are objects with the same properties
//the values of the properties are equal when compared with a recursive call to deepEqual
/*Returning the correct value from the function is best done by immediately returning false when a mismatch is 
found and returning true at the end of the function.*/

function deepEqual(value1, value2) {
  //if two simple datatypes are equal return true
  if (value1 === value2) {
    return true;
  //if value1 is null or not an object or typeof value2 is null or not an object return false  
  } else if (value1 == null || typeof value1 !== 'object' || value2 == null || typeof value2 !== 'object'){
    return false;     
  //make a variable for each value to keep track of number of iterations  
  } let properties1 = 0, properties2 = 0;
  //use a for in loop to iterate the properties in value1 and value2
  for (var prop in value1) {
    properties1 += 1;
  }
  for (var prop in value2) {
    properties2 += 1;
    if ( !prop in value1 || !deepEqual(value1[prop], value2[prop])){   //if the property is not in value1 and the above if statements are false return false
      return false;
    }
  }
  return properties1 == properties2;//if properties in a are equal to properties in b return true
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
