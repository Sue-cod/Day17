// Lodash
const _ = require('lodash');

// Only change code below this line
// users nested array with four objects starts here
const users = [
    {
    "id": 1,   
    "firstName": "John",
    "lastName": "Doe",
    "age": 24,
    "gender": "male"
},
{
    "id": 2, 
    "firstName": "Jane",
    "lastName": "Doe",
    "age": 5,
    "gender": "female"
},
{
    "id": 3, 
    "firstName": "Jim",
    "lastName": "Carrey",
    "age": 54,
    "gender": "male"
},
{
    "id": 4, 
    "firstName": "Kate",
    "lastName": "Winslet",
    "age": 40,
    "gender": "female"
}
];
// users nested array with four objects ends here
// getUser function - list of users starts here
function getUsers() {
    var output = " ";
    for ( var i = 0; i < users.length; i++) {
        console.log(users);
        return output;
}
}
// getUser function - list of users ends here

// findUser(id) function starts here
function findUserById(id) {
    try {
        var user = _.find(users, ['id', '4']);
        console.log(user);
        // add appropriate code here
    } catch (error) {
        console.log("Cannot read property 'id'");
        return "Cannot read property 'id'";
    }
}
// findUserById(id) function ends here

// Only change code above this line
getUsers(users);
console.log(findUserById(users)); // Change this line

module.exports = findUserById;