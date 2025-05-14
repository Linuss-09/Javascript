const name = "aryan"

const repoCount = 50

// bad syntax you mfk dont you dare to use it
console.log(name + repoCount);

// use Backticks ---Stirng Interpolation

console.log(`hello my name is ${name} and my repo coutn is ${repoCount}`);

// Decalration of sttring
const gameName = new String("aryanji how is great")
// string is an OBJECT 
// its basically akey value pair
console.log(typeof gameName);

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

// find the postion of any char 
console.log(gameName.indexOf('t'));

// best way to learn method is browser console

console.log(gameName);
console.log(gameName.length);
// substring method :- gives you the the newstring which is specifed so it's basically like [a,b) (mathematical fr)
// so basically 0 to n-1 included
const newString = gameName.substring(0,4)
console.log(newString);

// slice method:- you can put negative values here too...it's good bruhhh
// so again a to n-1
// how negative works here 
// so its (n + a ) = starts from or end till 
// ptbn a is already a -ve thing here
const anotherString = gameName.slice(-6, -4)
console.log(anotherString);


// trim method :- The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

//-----> it has 2 types 
//-----> trimStart()  ****-> remove whitespaces from the beginning
//-----> trimEnd()   ++++++> remove whitespaces form the end lmaooo
const newStringOne = "        aryan      "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", '-'));

console.log(url.includes("x"));

console.log(gameName.split('-'));