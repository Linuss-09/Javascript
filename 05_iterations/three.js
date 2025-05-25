// for of

// ['','','','','']
// [{},{},{},{}]

const arr = [1,2,3,4,5]

// syntax
/* for (const element of object) {
    
} */

// here element ka mtlb hai koi bhi like index or i or anything which is going to be changed......thik hai and then 
// object ka mtlb js ka object nhi hai yahan par
// it simply means that kis chiz pr aapne loop lagana ha and that's it....yeh looop har hiz pr lg skta hai weather its arr or string or any object....we dgaf

/* for (const num of arr) {
    console.log(num);
}
 */
// const greetings = "Hello world!"
// for (const num1 of greetings) {
//     if(num1 == " ") {
//         continue
//     }
//     console.log(`Each char is ${num1}`);
// }

/* 
// ForOfLoop on  Maps
const map = new Map()
map.set("US", "USA")
map.set('IN', "India")
map.set('IN', "India")
map.set("FR", "France")

// console.log(map);

for (const key of map) {
    console.log(key); //return arr of size 2 as key and value as elements of it....
}


// also you can put both of em simultaneously to destruct the arr
for (const [key, value] of map) {
    console.log(key, ':-', value);
} */


// forofloop on object

// *******objects are not itrable using forOF loop 

// const myObject = {
//     'game1': 'gta vi',
//     'game2': 'spiderman'
// }

// for (const [key, value] of object) {
//     console.log(key, ':-', value);
// }

