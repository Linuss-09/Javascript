// Arrays
// resizable , mixed
// associative arr nhi hote 

const myArr = [0,1,2,1,4,5,6]
const myHeros = ["jon", "dany"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]);

// console.log(myArr2);

// // Array methods
// // push add a value at the end of the arr
// myArr.push(78);
// console.log(myArr);

// // Pop ;- remove the ast element of the arr it returns that element as well so u can print it actually
// myArr.pop();  //removed78
// console.log(myArr.pop()); //removed 6 xD
// console.log(myArr);


// unshitft :- elemnt at the begginging of the arr but this mfk return the length of the arr xDDDD
// not optimized 
// myArr.unshift(45)
// console.log();

// // shift :- removes the first element and returns it 
// console.log(myArr.shift());

// console.log(myArr.includes(89));

// console.log(myArr.indexOf(4));


// .join() :- just convert the type of the arr kindaa idk wtf but yeah type string ho gya niche toh 
// const newArry = myArr.join()

// console.log(myArr);
// console.log(typeof newArry);

// slice, splice 
// original arr A
console.log("A", myArr);

// with slice - basically return the copy fo the portion of the arr
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);

// splice :- fkin manuplates the original arr this son of a bitch :- jinko delte kara it return those...so kinda murder krke lashein bhej deta hai #GOT
// delete kr deta hai yeh behnchodh woh bhi sara ka sara included
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C",myArr);

