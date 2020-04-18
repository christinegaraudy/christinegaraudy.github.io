// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-christinegaraudy");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //I: array
    //O: number
    let filterOutput = _.filter(array, function(customerObj){
        //filter out all of the male customers
        return customerObj.gender === 'male';
    });
    return filterOutput.length;
};

var femaleCount = function(array) {
    //I: array of customer objects
    //O: number of female customers
    return _.reduce(array, function(prev, current){
        //when to increment our seed
            //if our customer object has a gender of female
            if(current.gender === 'female'){
                prev += 1; // assign it to itself plus one
            }
        //when to not increment our seed
            //if our customer object's gender is not female
            return prev; //to use as seed
    }, 0)
};



var oldestCustomer = function(array) {
    //find the oldest customer's name
    //I: array of customer objects
    //O: string (customer's name)
    var results; //declare an empty variable to hold element
    for (let i = 0; i < array.length; i++){ //loop through array elements
        if (i === 0){ //if the position os the element is first (at index 0),
            results = array[0]; //set results equal to that element
        } else if (results.age < array[i]['age']){ //else if the age of that element is less than that of the current element's
            results = array[i]; //set results equal to current element (higher age)
        }
    
    } return results['name']; //return the name property of the element stored in results variable
    
};

var youngestCustomer = function(array) {
    //find the youngest customer's name
    //I: array
    //O: string
    var results; //declare an empty variable to hold resulting element
    for(let i = 0; i < array.length; i++){ //loop through array elements
        if(i === 0){ //if it's at the first index
            results = array[i]; //set results equal to that first element
        } else if (results.age > array[i]['age']){ //if you're past the first element, if age of object in results is larger than current element age
            results = array[i]; //return current element, the lower age
        }
    } return results['name']; //return the name property of the element in results
};

var averageBalance = function(array) {
    //find the average balance of all customers
    //I: array
    //O: number
    
    //declare an empty array to push balance key values into
    var balancesArray = [];
    //loop over objects in array
    for (let i = 0; i < array.length; i++){
        //declare a variable to grab current element balance, cut the $ off with substring
        var currentBalance = array[i]['balance'];
        balancesArray.push(parseFloat(currentBalance.substring(1, currentBalance.length).replace(",", ""))); //push all values from balance keys in new array,  //convert those strings into numbers

    } 
    var sum = balancesArray.reduce((a, b) => a + b, 0); //add numbers together to get a total   
    return sum / balancesArray.length; //divide the total by the length of the new array and return the product
};

var firstLetterCount = function(array, letter) {
    //how many customers' names begin with the given letter
    //I: array, letter
    //O: number
    //make an empty array to push names into
    var matches = [];
    //loop over customer objects array
    for (let i = 0; i < array.length; i++) {
        let customerName = array[i]['name'];
        if(customerName[0].toUpperCase() === letter.toUpperCase()){ //if the customer name property begins with given letter (both forced to uppercase), 
            matches.push(customerName); //push it into matches array
        }
    } return matches.length; //return the length of new array

    
};

var friendFirstLetterCount = function(array, customer, letter) {
    //Find how many friends of a given customer have names that start with a given letter
    //I: array, customer, letter
    //O: number
    var lett = letter.toUpperCase(); //set a new variable lett to the value of input letter made uppercase
    var count = 0; //start a counter at 0
    for(let i = 0; i < array.length; i++){ //loop through array of customer objects
        if(array[i]['name'] === customer){ //if the current object's name property is equal to the input customer's name
           for(let j = 0; j < array[i]['friends'].length; j++){ //loop through that customer object's friends property
               if(array[i]['friends'][j]['name'][0] === lett){ //if current customer object's friend object has a name that begins with input letter
                   count++; //increment counter
               }
           }
        }
    } return count; //return counter
};

var friendsCount = function(array, name) {
    //Find the customers' names that have a given customer's name in their friends list
    //I: array of customer objects, name of friend to check for
    //O: array of customer object names that contain input friend name
    //if the current object's friend list contains input name 
    //push that customer's name property into new array
    var results = []; //make an. empty array to push customer's names into who have friend
    for(let i = 0; i < array.length; i++) { //loop through array of customer objects
        //loop through current customer's friend array
        for(let j = 0; j < array[i]['friends'].length; j++) {
            if(array[i]['friends'][j]['name'] === name) { //if that array contains a key whose value is equal to input name
                results.push(array[i]['name']); //push current customer's name into results array
            }
        }
    }
    return results; //return results array
};

var topThreeTags = function(array) {
    //Find the three most common tags among all customers' associated tags
    //I: array of customer objects
    //O: array of most common tags
    //loop through array of customer objects
    var allTags = []; //make an empty array to push all customers' tags into
    for (let i = 0; i < array.length; i++){
        //grab each customer's tag array and combine them into one big array
        allTags.push(array[i]['tags']);
        allTags.reduce((acc, val) => acc.concat(val), []);
    }
    var flatTags = allTags.reduce((acc, val) => acc.concat(val), []); //flatten the array to get rid of nesting
     
        //use reduce to count how many times each word appears and save that data in a new object
    let tagCount = _.reduce(flatTags, function(accObj, tag){
        if (accObj[tag]){ //if the word exists as a key
            accObj[tag] += 1; //increment its count value
        } else {
            accObj[tag] = 1; //create a new key/value pair with word as the key and 1 as the value
        }
        return accObj;
    }, {}); //now there's a new object with a count of each word
 
    //turn the returned object into an array to be able to use sort method on it
    let tagArray = []; //make an empty array to push tags into
    for(let key in tagCount){ //iterate over tagCount object
        tagArray.push([key, tagCount[key]]); //push the keys and their values from tagCount into new array
    } 
    
    //use sort method to sort array into descending order
    tagArray.sort(function(a, b){
        return b[1] - a[1]; 
    });
    
    //make array of top three tags
    let top3arr = tagArray.slice(0, 3);
    
    //flatten that array
    let top3tags = _.map(top3arr, function(flatTagArray){
        return flatTagArray[0];
});

return top3tags;
    
};

var genderCount = function(array) {
    //Create a summary of genders, the output should be: {male: 3, female: 4, non-binary: 1}
    //I: array of customer objects
    //O: object of gender data
    //Constraints: must use reduce method
   
    var allGenders = []; //make new array to store all genders in
    for(let i = 0; i < array.length; i++) {  //iterate over array of objects
        allGenders.push(array[i]['gender']); //grab each object's gender property value and store in a new array
    }
    
    //use reduce to count how many times each gender appears and save that date in a new object
    let genderCount = _.reduce(allGenders, function(accumObj, gender){
        if (accumObj[gender]){ //if gender exists
            accumObj[gender] ++; //increment its count
        } else {
            accumObj[gender] = 1; //if it appears once, save with value equal to 1
        }
        return accumObj; //now there's an object with genders saved as key/value pairs representing how many times they appear in array
    },{})
    
    return genderCount; //return that object
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
