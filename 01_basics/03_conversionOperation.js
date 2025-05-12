let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "22"= >22
// "33abc" => NaN
// T/F => 1/0 respect.

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

// something ot boolean converison
// 1 =>true, 0=> false
// "" =>false
// "anythingHere" =>true

let someNumber =33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
// 33 string hai bro


// ********** Operations ***********

let value =3
let negValue = -value
console.log(negValue);

console.log(2+2);

let str1 = "hello"
let str2 = " aryan"

let str3 = str1 + str2
console.log(str3);

// some special kindaa things
// agar string pehle hai toh sb kuch string m convert ho jayega
console.log("2" + 45);
console.log(1 + "22");

console.log("1" + 2 +2);

// but if jyada no. are there and woh pehle ho toh addn then string kinda thhing so string hi banega but first addn then string ---it's strange af 

console.log(1 + 2 + "2");

console.log(typeof +true);
// console.log(true);

// bad practices
let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100;
// pehle store karein fir increment karein
gameCounter++;

console.log(gameCounter);