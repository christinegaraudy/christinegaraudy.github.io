/*
STRING MANIPULATION: Strings in Javascript are any combination of characters (letters,
        numbers, or symbols) encased between two single or double quotation marks. 
        There are many ways in Javascript to get information about strings and change 
        their behavior or presentation (like making all the characters uppercase 
        or lowercase). You can also access any character in a string by its index.
*/

// 0. With Operators: 
    
/* A) + or += can be used to concatenate strings.  It will join the strings on 
    either side of the operand and return a new string with them concatenated 
    together */
            
    console.log('first string' + ' second string'); /*logs first string second string 
                                                      to the console*/
            
    var string = 'Hello, ';
    string += 'World';
    console.log(string);
            
/* B) comparison operators >, <, >=, <=, ==, ===, !== can be used to compare one 
    string to another */
            
    'longer' > 'short'; // returns false because s is greater in lexigraphical order
    'aab' > 'aaa'; /* returns true because it checks each character in the first 
                    against the one at the same index in the second one by one and b 
                    is greater than a */
    'aaa' === 'aaa'; // returns true
    'aab' !== 'aaa'; // returns true
    'dog' >= 'cat'; // returns true because d is greater than or equal to c
            
/* 1. With String Methods: Built-in methods in JavaScript which act upon strings. 
    There are many! Here are a few examples: */
    
// A) .concat: joins two strings and returns new string
            
        var reptile1 = 'alligator'; 
        var reptile2 = 'lizard';
        console.log(reptile1.concat(reptile2)); //logs alligatorlizard
            
// B) .trim(): removes unnecessary whitespace in a string
            
        var mySentence = '     the cat is fat. ';
        console.log(mySentence.trim()); // logs the cat is fat
            
// C) .toUpperCase(): capitalizes all letters
            
        var whisper = 'this is quiet but i want to yell';
        console.log(whisper.toUpperCase()); // logs THIS IS QUIET BUT I WANT TO YELL
            
// D) .toLowerCase(): makes all letters lowercase
            
        var mixedCase = 'wHy IS thE CaSINg oF tHIS so CRAzy?';
        console.log(mixedCase.toLowerCase());
            
/* E) .slice(): returns a section of the string between the specified indices (non-
        inclusive) without altering the original string */
            
        var sliceMe = 'go ahead and slice this string on up';
        console.log(sliceMe.slice(2,8)); // logs ahead
            
// F) .charAt(): returns the character at the specified index
            
        var sound = 'meow';
        console.log(sound.charAt(2)); // logs o
        
/* 2. By Index: Strings and arrays are zero-indexed, meaning their first position is
    referred to as zero, then one, then two, etc. */
    
        var stringExample = "sunshine";
        console.log(stringExample[3]); //logs s to the console