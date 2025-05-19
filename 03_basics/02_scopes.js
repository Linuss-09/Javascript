var c = 300
let a = 23

// whats the fuking need of these 3 things ?
// {} coz chizein scope ke ander hi chalni chahiye underwide they can fuck things around

if (true) {
    let a = 10
    const b = 30
    console.log("Inner a : ", a);
    var c = 40
}

console.log("Outer a: ", a);


// console.log(a);
// console.log(b);
console.log(c); //coz var has fking global scope Y__Y

// windows ke andar and that means in browser jo scope hota hai that is different than the global scope in node



// nested scope
/* toh simple si baat hai that ki bache can take badon ki ice cream bade bada cant take bachon ki ice cream 

*/
// function one() {
//     const username = "hitesh"

//     function two() {
//         const website = 'youtube'
//         console.log(username);
//     }
//     console.log("hii");
//     // console.log(website);

//     two();
// }

// one();


// things bout if 

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++ intresting


console.log(addOne(8)); //runs fine coz you just declared it wihtout storing it mfk
function addOne(num) {
    return num + 1 
}

console.log(addTwo(5)); //yahan error dega coz aapne fucntion ko declaration ke saath ek variabel me hold bhi kar diya hai 
const addTwo = function (num) {
    return num + 2
}

