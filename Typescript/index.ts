console.log("meher");
//declaring string variable
let greetings:string="hello world"
greetings.toUpperCase();
console.log(greetings);


// declaring a number variable
let n:number=5689;


//boolean
let logged:boolean=false;


// understood where to use static variable declaration and where not to and also how typescript automatically assigns datatype to variable 

//understood also "any" keyword and why it should be used sparingly


//functions

function addtwo(num:number)
{
    return num+2;
}

addtwo(2);

function toupper(str:string):string
{
    return str.toUpperCase();
}


//promise datatype
async function getFavoriteNumber(): Promise<number> {
  return 26;
}

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }):void {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });
const meher = (pt: { x: number; y: number }): void => {
    // Function body goes here
};


function createUser({name:string})
{

}
let user1={name:"meher",email:"k@gmail.com"}
createUser(user1)

//types

type Point={
    x:number,
    y:number
}