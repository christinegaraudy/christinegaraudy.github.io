/*
    FUNCTIONS: Sets of procedures that perform tasks or return values in JavaScript.
*/

    /*  0. The two phases to using functions: 
            Q: First we must ___? A: declare and define the function */
            
                function sum(num1, num2){
                    console.log(num1 + num2);
                }
            
    /*       Q: Next we can execute (or two other words for executing a function?) a function by? A: invoke or call the function
            */

                sum(1,2);

    /* 1. Q: What’s the difference between a function’s parameters and arguments PASSED to a function?
            A: A function's parameters are the input values it accepts.  The function's arguments are the values passed to it when it is called */

                // function example(parameter1, parameter2) {
                    // ...do something...
                // }
                
                // example(argument1, argument2);

    // 2. What’s the syntax for a NAMED function?
        
            function subtract(num1, num2) { //function keyword, name of function, function parameters, open curly braces
                console.log(subtract(num1 - num2)); //what you want the function to do
            } //closing curly braces

    /* 3. How do we assign a function to a variable?
            */


    /* 4. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
            */ 


    /* 5. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
            */


    /* 6. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), 
that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!) (ALSO, see: Understanding 
JavaScript Closures with Ease) */