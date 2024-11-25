console.log("meher");
//declaring string variable
var greetings = "hello world";
greetings.toUpperCase();
console.log(greetings);
// declaring a number variable
var n = 5689;
//boolean
var logged = false;
// understood where to use static variable declaration and where not to and also how typescript automatically assigns datatype to variable 
//understood also "any" keyword and why it should be used sparingly
//functions
function addtwo(num) {
    return num + 2;
}
addtwo(2);
function toupper(str) {
    return str.toUpperCase();
}
//promise datatype
// async function getFavoriteNumber(): Promise<number> {
//   return 26;
// }
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
var meher = function (pt) {
    // Function body goes here
};
function createUser(_a) {
    var string = _a.name;
}
var user1 = { name: "meher", email: "k@gmail.com" };
createUser(user1);
// arrays
var superheros = [];
superheros.push("spiderman");
var allUsers = [];
allUsers.push({ name: "meher", isActive: true });
