// creating an Alias


// using Alias
var user = {
    firstname: "ankit",
    lastname: "buade",
    age: 10
};
function login(userData) {
    return userData;
}
console.log(login({ firstname: "ankit buade", age: 20 }));
