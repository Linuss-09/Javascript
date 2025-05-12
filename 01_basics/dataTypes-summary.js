// js has basically 2 types of datatypes based on how they are stoed in memory and how they are accesible

// 1. Primitive around 7 ;-they are call by value
// their copy is given 
// String , Number, null, undefined, Symbol, bigint

// in js a no. is a no.
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail //it undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //both are different
console.log(typeof id);
console.log(typeof anotherId);

// bigint
const bigNumber = 234324343243242342342343n
console.log(typeof bigNumber);
//2. Reference(Non primitive) :- they can be call by reference

// Array, Objects, Functions

// Q. js is dynamically typed lang or statically typed lang
// dynamically typed lng as yahan variable ka dataType batna ni padta exlicitely

// Arrays
const heros = ["jon", "dany", "tyrion"]

// object :- curly braces ke ander likhte hain and dataype an be anything object it can be string, object itself, function, number anything
let myObj = {
    name: "aryan",
    age: "22"
}

// functions :- js me function can be stored 
const myFunction = function() {
    console.log("Hello world");
}
console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp); //object

// the return type of non primitive datatype is actually object
console.log(typeof myFunction); //object function
