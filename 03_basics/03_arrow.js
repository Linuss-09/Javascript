const user =  {
    username : "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        // here this refers to the current context whcih is actually the current object here so it will log this fking object 
    }
}

// whenever we want to acess current context we use fking this keyword 
// current context ka mtlb hai given scco[e ke andar jitne bhi variable hain unko acess karne ka try karna :)]

// user.welcomeMessage()
// user.username = "aryan"
// user.welcomeMessage()

// console.log(this);
// here current contxt os whole object in nod enviroment empty object


// function chai() {
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }
// toh jo contect hota hia woh basically objects ke andar kaam karta hain hum usko aese har jagah use nhi kar skte

// bahut sari vale milengi

// chai()

// arrow 

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }
// chai()

/* 
arrow function is basically 2 things 
1.Aap function keyword hata dijiye 
2. and paranthesis ke baad ek Arrow laga dijiye
*/

const chai = () => {
    let username = "hitesh"
    console.log(this.username);  //undefined hi aayega bdsm wale :_
    console.log(this);  // {} yehi aayega bro this is same as normal functions
}
// chai()

// basic syntax

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return (return likhna nhi padh rha alag se) :- just remove the fkin curly braces mfk and put that one liner return statement in the same line
const addTwo = (num1,num2) => num1 + num2

// u canput paranthesis and the rturn thing 
const addThree = (nums1, nums2) => (nums1 + nums2)

// arrow fuctnion ke andar :-
// Curly braces use kra toh return keyword likhna hi padegs 
// whereas agar paranthesis me wrap kara toh return keyword nhi likhna padega :--)) 
// REact me ati matra me use hoti hain yeh sb chize in

const add4 = (num1, num2) => ({username : "hitesh", age: 18})
// jo this function will return object 
// so object ko return karne ke liye use paranthesis me wrap karna hi padega 
console.log(add4(2,3));

console.log(addThree(3,5));


const myArray = [2,3,4,5,6]
const hii = (str) => (`hii ${str}`)
// its returning hii str 

console.log(hii("yashu ji"));