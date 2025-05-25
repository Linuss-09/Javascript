const myObject = {
    js: "javascript",
    java: "java",
    cpp: "c++",
    swift:"swift by apple"
}

// forin
// for (const key in myObject) {
// /*     console.log(key); //logs keys only
//     console.log(myObject[key]); //logs objects only */
//     // console.log(key, ":-", myObject[key]);
//     console.log(`${key} is shortcut for ${myObject[key]}`);
// }

const porgramming = ["js", "rb", "py", "cpp"]

for (const key in porgramming) {
    // console.log(key); //gives the index

    //for value
    console.log(porgramming[key])
}


const map = new Map()
map.set("US", "USA")
map.set('IN', "India")
map.set("FR", "France")


for (const key in map) {
    console.log(key);
}// no ouput coz the problem is basically map is not itereable for for in loop 

// so tldr:
// objects ke upar --> FOR IN

// arr K UPAR --> for of