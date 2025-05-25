// if

const isUseLoggedIn = true

if(3 != 2) {
    console.log("Hii Ellie");
}
// === is called "strict equal"
if(2 === "2") {
    console.log("Hi joel");
    // checks the fkin datatype as well along with the value hence it gave false

}
// !== it does the same just with the not thing so if data types ae diff or if the value if diff its going to give you fkin true


//  == is called normal equal
if(2 == "2") {
    console.log("Hii dina");
    // checks only the value not the datatype hence it will say both are equal even though they are number and string but it's still true
} 

// cndn :- <, >, <=, >=, ==, !=, ===, !==

const temp = 41

if (temp<50) {
    console.log("less than 50");
} else {
    console.log("temperatur is greater than 50");
}

const score = 200

if (score>100) {
    const power = "fly"
    console.log(`User: ${power}`);
}

// console.log(`User power: ${power}`);

// short hand notation
const balance = 1000

// implicit scope . never do this
// if(balance > 500)  console.log("test"), console.log('hii bitehc');

// nesting
/* if (balance < 500) {
    console.log("less than 500"); 
} else if(balance < 750) {
    console.log("less than 750");
}else if(balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
} */

const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false

if(userLoggedIn && debitCard &&  2==3) {
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}




