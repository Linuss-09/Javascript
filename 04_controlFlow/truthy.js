const userEmail = []

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("dont have user email");
}

// idhar humne nhi dekha useremaikl kisi ke eq hai bhi ya nhi we just checked that if email me kuch aaya hai yah nhi thats it

// falsy value 
/* 
false, 0, -0, BigInt 0n, "", null, undefined, NaN
*/

// Truthy values
/* 
true, "0", 'false', string ke andar kuch bhi likha ho that is truthy value, [], {}, function(){}
*/

if(userEmail.length === 0) {
    console.log("arr is empty");

}
const emptyObj =  {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null defined

// let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// console.log(val1);

val2 = null ?? 10 ?? 20
console.log(val2);

// Terniary operaotr

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 90 ? console.log("more than 90"): console.log("less than 89");

