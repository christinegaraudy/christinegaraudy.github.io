
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
  //make a for loop that prints one hashtag on the first line, then adds an extra one to each line after that until it gets to input number
for (let hashtag = '#'; hashtag.length <= number; hashtag += '#'){
  console.log(hashtag);
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  //make a for loop that begins with start input and ends with end input
  for (let num = start; num <= end; num++) {
  //if the modolus of the number divided by 3 AND 5 is 0, print fizzbuzz
  if(num % 3 === 0 && num % 5 === 0){
    console.log("fizzbuzz")
  //if the modolus of the number divided by 3 is 0, print fizz
  } else if (num % 3 === 0) {
    console.log("fizz");
  //if the modolus of the number divided by 5 is 0, print buzz
  } else if (num % 5 === 0) {
  	console.log("buzz");
  //if the number is not divisible by 3 nor 5, print the number  
  } else {
    console.log(num);
  }
}    

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

 function drawChessboard(number) {

//make an empty variable to accept value  
let board = "";

//make a for loop to loop number times down
for (let y = 0; y < number; y++) {
  //make another nested loop to loop number times across
  for (let x = 0; x < number; x++) {
    //if the x index position and the y index position added together is an even number, put a space
    if ((x + y) % 2 == 0) {
      board += " ";
    //if the x index position and y index position added together is an odd number, put a hash
    } else {
      board += "#";
    }
  }
  //add a line break
  board += "\n";
}

console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
