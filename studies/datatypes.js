/* DATATYPES: The different kinds of information objects in JavaScript can hold are organized into the following categories:
*/
    
 // Primitive Datatypes
 
 /* 0. Number: Any numeric value expressed as an Arabic numeral. Can use float integers (decimals), or express very large (or very small) numbers 
               as exponents with e. Doesn't need quotation marks (quotes make it a string) */
        
        let students = 25;
        let pie = 3.14;
        let bigNumber = 1234e5;
       
        // A- Infinity: represents positive infinity. Displayed when a number is larger than the upper limit allowed (larger than max value). 
        
        /* B- -Infinity: inverse of infinity. Represents negative infinity.  Displayed when a negative number has more than max number of 
                chracters allowed. */
        
 
 // 1. String: Any character(s) enclosed in single quotation marks, double quotation marks, or backticks.
 
        let myString = 'This is string text.';
        let anotherString = "So is this.";
        let alsoString = `I am, too.`;
 
 // 2. Boolean: Binary value of either true or false. Does not need to be enclosed in quotation marks.
        
        let yes = true;
        let no = false;
 
 // 3. Undefined: A variable that has been declared (named), but not declared (assigned a value, initialized).
 
        let myName;
        console.log(myName); //returns undefined. I didn't tell it what myName is supposed to hold.
 
 // 4. Null: A variable or object that has been assigned no value on purpose.
 
        let noValue = null;
 

 // 5. NaN: Means a value is not a number. Can result from trying to perform operations on numbers that won't work.
 
        console.log(0/0);       
 
 
 // Complex Datatypes
 
 /* 6. Arrays: Zero-indexed collections of data, meaning the item at the first index is 0, the one at the second is 1, and so on. Can contain any combination 
        of primitive values or objects. JavaScript contains many built-in methods that work on arrays, such as .push(), .pop(), .shift(), .unshift(), etc.
        Useful for being able to reference any element by its index, or order. Elements are listed inside of square brackets.*/ 
 
        var classmates = ["John", "Jack", "Joe", "Jessica"];
        classmates.push("Justine"); //adds Justine to end of classmates array
        console.log(classmates); //logs ["John", "Jack", "Joe", "Jessica", "Justine"] because .push()method altered original array
        console.log(classmates[1]); //logs "Jack"
 
 /* 7. Objects: Collections of properties stored as key/value pairs.  Not listed in order like arrays.  You must know a value's key to be able to access it.  
        Useful for storing a lot of information about a subject which doesn't need to be ordered numerically, but rather by association.  Objects are 
        contained within curly brackets. */
 
        var christinesCar = {
            make: "Toyota",
            model: "Space Cruiser",
            year: "1986",
            color: "champagne",
            type: "van"
        }
        
        christinesCar.engine = "4 cylinder"; //adds engine key with value 4 cylinder to christinesCar object
        console.log(christinesCar.make) //logs "Toyota"
 
 /* 8. Functions: Blocks of code that perform specifically designated actions.  They can accept parameters in the function definition, but they don't have to.
       They are useful because they are reusable throughout the program- when you want to perform a task you have written a function to accomplish, you can
       simply call (or invoke) the function by name, passing in the relevant arguments, if applicable, and it will perform the task without you having to 
       write everything out again. Upholds best practices standard DRY (don't repeat yourself) to make code as clean and concise as possible. */
       
       function sum(num1, num2) { //accepts two parameters- two numbers
           console.log(num1 + num2); //logs the sum of the two numbers given
       };
       
        sum(3,4); //logs 7. Can be invoked this way with any numbers as many times throughout the program as needed without writing new code.
 
 /* 9. Primitive vs. Complex Datatypes: Primitive data types have a maximum size of 8 bytes in memory. they can't store additional values besides themselves 
       (only hold one value at a time). Complex data types can hold a collection of values and information, including other data types, and can be any size.*/
 
 
 
 // 10. By Copy vs. By Reference: 
 
        /* Primitive data types are assigned by value- the value is stored directly in the variable. You can copy the value from one
        variable into another. Changing one does not affect the other because they are self-contained.*/
        
        var a = 3;
        var b = a; //copies the value of a into new variable b
        b = 5; //changes b, doesn't affect a
        console.log(a); //logs 3
        console.log(b); //logs 5 and does not change a
        
        /* Complex data types have variables which reference a location in memory instead of containing the value directly.  When referenced, the variable
           points to where the object is.  When copied, the copy and the original will both changed if either one is changed because they are referring to
           to same place. */
           
        var cd = {
            artist: "Led Zeppelin",
            album: "Physical Graffiti"
        };
        
        var record = cd;
        
        record.album = "Houses of the Holy";
        
        console.log(cd) //logs {artist: "Led Zeppelin", album: "Houses of the Holy"} because changing the object at record copy also changed it at cd original.