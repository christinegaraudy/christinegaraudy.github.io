/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var: the only way to declare a variable before ES6. does allow for re-assignment. scoped to nearest function block.

var numberArray = [0, 1, 2, 3]
for (var i = 0; i < numberArray.length; i++) {
};
    console.log(i); /*logs 3. doesn't return error because var can be seen outside of its immediate code block, and var can be re-assigned. if we 
                    replaced var with let, it would return an error because let would be confined to its enclosing block and unable to be seen in the
                    rest of the function*/


// 5. let: allows for the re-assignment of a variable (eg counters, loops). scoped to nearest enclosing block. not yet supported by IE browsers.

let x = 12;
if(x === 12) {
    let x = 8;
    console.log(x); //logs 8 because use of let allows variable to be re-assigned
}

// 6. const: the variable cannot be re-assigned (ie the variable assignment remains constant)

const person = 'Tom';
//const person = Mark;
console.log(person); /*when second person is uncommented, it returns an error because const was first used to define person as Tom 
                    and it cannot be re-assigned now.*/

/* 7. hoisting: during compiling, variables declared using var are moved to the top of the scope they are currently in - the top of the function if
                they're declared inside of a function, or the all the way to the top of the global scope if declared outside of a function. (functions
                themselves also get hoisted, to the very top above variable declarations in the global scope.) However, variables defined with let 
                or const are not hoisted.  Important: the declaration itself gets hoisted, but not the value assigned to it.  If you try to console
                log a variable before it is defined in the code, it will return undefined because while the variable exists at that point, its 
                value does not yet.*/
                
console.log(book);
var book = 'Wuthering Heights'; //logs book as undefined- variable exists already when called to log, but its value does not yet
                                //had the variable been declared with let or const, this would have returned an error