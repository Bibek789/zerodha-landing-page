//primitive

// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345645564674654754n



//Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "bibek",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world");
}
console.log(typeof myfunction);



//+++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (primitive), heap(Non-primitive)
let myYouTubename = "shadowdotcom"
let anothername = myYouTubename
anothername = "chaiaurcode"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "bibek@google.com"

console.log(userOne.email);
console.log(userTwo.email);