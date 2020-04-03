/* 
    OPERATORS: Perform operations on operands/datatypes
*/

// 0. Assignment operators: Assign values to variables.

    // A) = assigns right value to left operand
    
    // B) += adds left and right operands and assigns that value to the left operand
    
    // C) -= subtracts left minus right operand and assigns that value to left operand 
    
    // D) *= multiplies operands and assigns that value to the left operand
    
    // E) /= divides right operand from left and assigns that value to the left operand
    
    // F) %= gets the remainder/modulus of left operand divided by right and assigns it to the left operand
    
    var a = 2,  b = 4;
    
    a = b; // a is 4
    a += 1; // a is a plus 1, which is 3
    a -= 1; // a is a minus 1, which is 1
    a *= 5; // a is a multiplied by 5, which is 10
    a /= 2; // a is a divided by 2, which is 1
    b %= 3; // b is the remainder of b divided by 3, which is 1

// 1. Arithmetic operators:

    // A) + addition: adds two operands
    
    // B) - subtraction: subtracts right operand from left
    
    // C) * multiplication: multiplies two operands
    
    // D) / division: divides right operand from left
    
    // E) % modulus: gets the remainder(modulus) created from dividing right operand from left
    
    // F) ++ incrementor: increases operand value by 1 commonly used for looping forwards over an array.
    
    // G) -- decrementor: decreases operand value by 1. commonly used for looping backwards over an array.
    
    var c = 3, d = 5;
    
    2 + 2; // adds 2 to 2, returns 4
    4 - 2; // subtracts 2 from 4, returns 2
    3 * 3; // multiplies 3 by 3, returns 9
    16 / 8; // divides 16 by 8, returns 2
    11 % 2; // divides 11 by 2, returns the remainder of 1 (2 goes into 11 5 times, with 1 left over)
    c++; // returns 4 (3 + 1)
    d--; // returns 4 (5 - 1)

// 2. Comparison operators: Compare two values and return an evaluation of true or false.

    // A) == loosely equal to (isn't concerned with type, so the string "2" would evaluate as loosely equal to the number 2, for example)
    
    // B) === strictly equal to (is concerned with type, so "2" would not evaluate as strictly equal to 2)
    
    // C) != not loosely equal to (there is also !== not strictly equal to, which works as the inverse of the example above)
    
    // D) > greater than (is left operand larger than the one on the right?)
    
    // E) < less than (is the left operand smaller than the one on the right?)
    
    // F) >= greater than or equal to (is the left operand larger or the same as the one on the right?)
    
    // G) <= less than or equal to (is the left operand smaller or the same as the one on the right?)
    
    "4" == 4; // returns true
    "4" === 4; // returns false
    4 != 4; // returns false
    3 > 2; // returns true
    4 < 5; // returns true
    5 >= 5; // returns true
    7 <= 6; // returns false

// 3. Logical operators: Combine and compare two conditions

    // A) && and: the statement on the left AND the statement on the right are both truthy 
    
    // B) || or: the statement on the left OR the statement on the right is truthy
    
    // C) ! not: reverses the result of the condition
    
    (2 > 1) && (4 > 3); // returns true because both conditions are true
    (1 > 2) || (3 > 2); // returns true because one condition is true
    !(2 > 1); // returns false because (2 > 1) is true and the bang (!) operator reserves that value to make it become false

// 4. Unary operators (!, typeof, -): Accepts only one operand and performs operation.

    // A) ! logical not:
    
        !false; // returns true
        !true; // returns false
    
    // B) typeof: returns a string stating the datatype of operand. 
    
        typeof "three"; // returns string
        typeof 3; // returns number
    
    // C) - unary negation: converts the operand into a negative number.
        
        -'3'; // returns -3
        -'Infinity'; // returns -Infinity

/* 5. Ternary operator (a ? b : c): Accepts three operands. It begins with a condition, then a question mark (?). Next, there are two
    expressions separated by a colon (:).  If the condition evaluates to be true, the first expression will be executed.  If the condition
    evaluates as false, the second expression will be executed. (condition ? expression1 : expression2)  Useful as a way to more cleanly
    condense an if-else statement (if condition is true, execute expression1, else execute expression2) */
    
    var e = 7, f = 8;
    (e > f) ? 'yes' : 'no'; // returns 'no' because conditional statement evaluates to false, so second expression executes