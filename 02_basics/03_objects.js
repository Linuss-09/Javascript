//singleton jab bhi construcotr se banate hai toh ek singleton object banata hai
// literals se sigleton nhi banta hai 

// symbols
const mySym = Symbol("key1")

//Object literals

const JsUser = {
    name: "Danerys",
    "full name": "Danerys Stormborn Targarean",
    // now to acess this full name thing you  need to use [ this method]\
    [mySym]: "myKey1",
    age: 38,
    location: "kings landing",
    email: "dany@dracarys.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// how to acees objects
// using . 
// console.log(JsUser.email);

// using []
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email =  "jon@snow.com"
// basically used to lock object from any change 
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting = function A() {
    console.log("hiii dany");
}

JsUser.greetingTwo = function A() {
    console.log(`hiii dany, ${this.name} `);
}

console.log(JsUser.greeting);
// here we are not callaing the fkin fucntion

// its like asking hi JS madam yeh batana i JsUser.greeting me kya stored hai ? and as we can see wahan par function stored hai so output aayga like below
// [Function (anonymous)]   :- here function execute nhi hua hai just uska reference aaya hai

console.log(JsUser.greeting());
// its like saying 
// hii js madam can you call greeting() please ....ann then execute whatever the body it has

// butt .....we haven't defined anything like the return type and all...of the function so it's return value would be ----->undefined <......


console.log(JsUser.greetingTwo());