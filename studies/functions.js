/*
    FUNCTIONS: Sets of procedures that perform tasks or return values in JavaScript.
*/

/*  0. The two phases to using functions: 
    
    Q: First we must ___? 
    A: declare and define the function */
            
        function sum(num1, num2){
            console.log(num1 + num2);
        }
            
/*  Q: Next we can execute (two other words for executing a function?) a function by? 
    A: invoke or call the function */

                sum(1,2);

/* 1. Q: What’s the difference between a function’s parameters and arguments PASSED to 
        a function?
      A: A function's parameters are the input values it accepts.  The function's 
        arguments are the values passed to it when it is called */

        // function example(parameter1, parameter2) {
            // ...do something...
        // }
                
        // example(argument1, argument2);

// 2. What’s the syntax for a NAMED function?
        
    //function keyword, name of function, function parameters, open curly braces    
    function subtract(num1, num2) { 
        console.log(subtract(num1 - num2)); //what you want the function to do
    } //closing curly braces

// 3. How do we assign a function to a variable?
            
    const variableName = function() {
      //..do something...
    };

/* 4. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
    How do we specify inputs, and how do we specify outputs? */
             
    //input1 and input2 represent optional parameters this function will take         
    function exampleFunction(input1, input2) { 
        return input1 + input2; //using the return keyword we can specify an output. 
    }                           //here, i'm concatenating input1 and input2, but could 
                                //be anything
            
            exampleFunction("cat", "flower"); //invoking the function and passing the 
                        //two arguments we asked for when we defined the function above 

/* 5. Scope: Functions can see and modify variables in parent or global scopes. The 
    inverse is NOT true. */
            
        let array = [1, 2, 3, 4];
        
        //this function can access the array variable in the global scope use it
        function addToArray(number) { 
            array.push(number);
        }
        
        function globalScope() {
            const localVariable = 'I am inside the function!';
        }

        //console.log(localVariable); //says variable is undefined because it cannot 
                                     //reach inside function to see it 
        
/* 6. Closures: Functions form closures around the data they house. If an object is 
    returned from the Function and is held in memory somewhere (referenced), that 
    closure stays ALIVE, and data can continue to exist in these closures. */
        
    function closureExample() {
        const luckyNumber = 7;
        return function() {
            return luckyNumber * 3; //keeps variable alive in returned function
        };
    }
        
    function anotherClosure(parameter1) {
        return function(parameter2) {
            return parameter1 + parameter2; //keeps parameter alive in returned function
        };
    }