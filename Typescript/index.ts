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
// async function getFavoriteNumber(): Promise<number> {
//   return 26;
// }

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


// arrays
const   superheros:string[] =[];

superheros.push("spiderman")


type User={
    name:string
    isActive:boolean
}


const allUsers:User[]=[]

allUsers.push({name:"meher",isActive:true});



//union

let score:number|string=33

score=44
score="meher"

type use1={
    name:string
    email:string
    no:number
    role:string
}

type admin={

    name:string
    no:number
}

let meherprakash:use1|admin={name:"kmeherprakash",email:"k@gmail.com",no:9347354274,role:"user"}

meherprakash={name:"kmp",no:1122336655}


function dbid (id:number|string):number|string{

    if(typeof id ==="string")
        return id;
    else
        return id;

}

const data :(number|string)[]=["1,2",3]  // data can have number strings or both

const data2:number[]|string[]=[1,2,3] //data can be number or strings but not both


//declaring constant values

const pi:3.14=3.14;

//pi=5  error not possible


//tuples
const tuser :[string,number] =[]


//enums

enum seatchoice{
    AISLE,
    MIDDLE,
    WINDOW
}


//INTERFACES

interface USer{

    readonly id:number,
    name:string,

    setTrial():string

}