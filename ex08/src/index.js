// Lodash
 const _ = require('lodash');

// only change code below this line
// users nested array with four objects starts here
const users = [
    {
    "firstName": "John",
    "lastName": "Doe",
    "age": 24,
    "gender": "male"
},
{
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 5,
    "gender": "female"
},
{
    "firstName": "Jim",
    "lastName": "Carrey",
    "age": 54,
    "gender": "male"
},
{
    "firstName": "Kate",
    "lastName": "Winslet",
    "age": 40,
    "gender": "female"
}
];

// users nested array with four objects ends here

// getUsers function - list of users starts here
function getUsers() {
    var output = " ";
for ( var i = 0; i < users.length; i++) {
    console.log(users[i]);
    return output;
}
/* console.log(getUsers("John Doe is 24, male"));
console.log(getUsers("Jane Doe is 5, female"));
console.log(getUsers("Jim Carrey is 54, male"));
console.log(getUsers("Kate Winslet is 40, female")); */
}
// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
        var user = _.find(users, ['lastName', 'gender']); // add appropriate code here
        console.log(user);
        var iFindUser = (`${firstName} ${lastName}  "is"  ${age}  ","  ${gender}`);
        return iFindUser;    
    
    } catch (error) {
        console.log("Cannot read property 'firstName' of undefined");
        return "Cannot read property 'firstName' of undefined"; // change this line
        console.log("Cannot read property 'firstName' of undefined"); // change this line
    }
}
// findUser(lastName, gender) function ends here
// only change code above this line
getUsers();
findUser(Doe, male); // change this line
findUser(Doe, female);
findUser(Carrey, male);
findUser(Winslet, male);

module.exports = findUser;