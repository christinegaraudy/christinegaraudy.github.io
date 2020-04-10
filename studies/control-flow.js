/*
    CONTROL FLOW: we can use conditional statements to control the flow of our 
        program, or the order in which code executes.  this is accomplished by evaluating 
        whether statements are true or false, and depending on that answer, different
        blocks of code will run or we will move to the next conditional statement, and so on.
*/
            const a = 6, b = 5;

    /* 0. IF: precedes a conditional statement that tells the computer what to check 
            for. can only have one if statement. */
    
            if( a > b ) {
                console.log('a is bigger!');
    
    /* 1. ELSE IF: follows the if statement to tell the computer to do something else 
            in the case that the if statement does not evaluate to true. can have as 
            many else if statements as you need to cover all the cases you want to. */
            
            } else if( a < b ) {
                console.log('a is smaller!');
    
    /* 2. ELSE: provides a default in the event that the if statement and all the if 
            else statements evaluate to false. you don't have to use an else statement, 
            but it is nice to be able to provide some output if none of the preceding 
            statements execute.  you can only have one else statement. */
            
            } else {
                console.log('a and b must be equal!'); 
            }
            
            /* **Syntax for If/Else-If/Else Chains (will only run one code block. once
                it reaches something that is true, or doesn't and reaches the default,
                it will run the corresponding block of code and stop, exiting the chain.)*/
            
            // if (statment to be evaluated is true) {
                //run this block of code only and exit the logic chain;
                //if false, move down to next conditional statement;
            //} else if (this is true) {
                //do this thing instead;
                //if false, move down to next conditional statement;
            //} else { 
                //if none of the above are true, run this default code
            //}
            
            if (1 > 2) {
                console.log('IF is true');
            } else if ( 2 > 3) {
                console.log('ELSE-IF is true');
            } else {
                console.log('ELSE this is the default'); //logs this one because
            }                                           //all above are false 
    
    /* 3. SWITCH: sometimes easier to read than an if... else if... else... chain. 
            provides a statement to value after the keyword switch, then a list of 
            cases to check the switch against.  if the switch matches a case, that 
            case's code block will execute. if it doesn't match any, default will. 
            could be called more reliable than an if/else-if/else chain of logic
            because it takes less time to compile, so it runs faster.*/
            
            const c = 'carrot';
            
            switch(c) {
                case 'apple':
                    console.log('You ate an apple.');
                    break; //stops more code from executing if case is met
                case 'banana' :
                    console.log('You ate a banana.');
                    break;
                case 'carrot':
                    console.log('You ate a carrot.');
                    break;
                default:
                    console.log('I dunno what you ate.');
            }