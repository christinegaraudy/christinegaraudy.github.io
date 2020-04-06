// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//create a function that accepts three parameters: id, nameFirst, nameLast 
function makeContact(id, nameFirst, nameLast) {
    //make an object called contact into which function will input values given
    let contact= {
            id: id,
            nameFirst: nameFirst,
            nameLast: nameLast
        };
    return contact;    
    
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     
    //make an array to hold contacts called contacts
    let contacts = [];
     
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        //make addContact function that takes a contact object to be added to the contact list
        addContact: function(contact) {
            return contacts.push(contact);
        },
        
        //make findContact function that takes a fullName string and returns the contact object if it is found in the contacts list, or else returns undefined
        findContact: function(fullName) {
            //make a loop to go over contacts array
            for(let i = 0; i < contacts.length; i++) {
                //if fullName is the same as nameFirst + nameLast of contact at that index, return that contact object
                if(contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'] === fullName) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
    
        //make removeContact function that takes a contact object to be removed from the contact list
        removeContact: function(contact) {
            //loop over contacts array
            for(let i = 0; i < contacts.length; i++)
            //if contacts is the same as contact at that index
            if(contacts[i] === contact) {
            //remove contact
             contacts.splice(i, 1); 
            }

        },
        
        // //make a printAllContactNames function that returns the full names as strings, separated by a line break
        // printAllContactNames: function() {
        //     //loop over all contacts in contacts array
        //     for(let i = 0; i < contacts.length; i++) {
        //         //return each element's firstName and lastName properties joined with a space and separated from the next element's with a line break
        //         return contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast'] + '\n';
        //         //create a condition that won't add the line break to the final contact

        //     }
            
        // }
        
                //make a printAllContactNames function that returns the full names as strings, separated by a line break
        printAllContactNames: function() {
            //create an empty fullNames array to catch firstName plus lastName
            let fullNames = []; 
            //loop over all contacts in contacts array
            for(let i = 0; i < contacts.length; i++) {
                //return each element's firstName and lastName properties joined with a space saved in fullNames array
                 fullNames.push(contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']);
            }

                 return fullNames.join('\n');
            }

        
        
        };
    
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
