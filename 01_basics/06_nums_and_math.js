const score = 400

const balance = new Number(100)
console.log(balance);


console.log(typeof balance.toString());
console.log(balance.toString().length);

// quite important for certain things
console.log(balance.toFixed(2));

const otherNumber = 23.89098
console.log(otherNumber.toFixed(2));

console.log(otherNumber.toPrecision(3));

console.log(otherNumber.toPrecision(5));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++ MATHS +++++++++
console.log(Math);
console.log(Math.E);

console.log(Math.abs(-4));

// Method to round of using basic arithmetic rule
console.log(Math.round(4.8));

// ceil (upar wali value)
console.log(Math.ceil(4.3));

// // floor (niche wali value)
// console.log(Math.floor(4.8));

// console.log(Math.pow(2,5));


// // to get the min value in among numbers
// console.log(Math.min(4,5,8,9,7,6));
// console.log(Math.mac(4,5,90,9));


// creates a random value between 0 to 1 
console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
