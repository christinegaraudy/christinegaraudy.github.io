/*
    CONTROL FLOW: The order in which the program executes statements.
*/
            const a = 6, b = 5;

    // 0. IF: precedes a conditional statement that tells the computer what to check for. can only have one if statement.
    
            if( a > b ) {
                console.log('a is bigger!');
    
    /* 1. ELSE IF: follows the if statement to tell the computer to do something else in the case that the if statement does not evaluate to true.
            can have as many else if statements as you need to cover all the cases you want to. */
            
            } else if( a < b ) {
                console.log('a is smaller!');
    
    /* 2. ELSE: provides a default in the event that the if statement and all the if else statements evaluate to false. you don't have to use an
            else statement, but it is nice to be able to provide some output if none of the preceding statements execute.  you can only have one
            else statement. */
            
            } else {
                console.log('a and b must be equal!'); 
            }
    
    /* 3. SWITCH: sometimes more readable than an if... else if... else... chain. provides a statement to value after the keyword switch, then
            a list of cases to check the switch against.  if the switch matches a case, that case's code block will execute.  if if doesn't match
            any, your default will. */
            
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