function sayMyNmae() {
    console.log("aryan");

}

// reference of a function 
sayMyNmae

// execution fo function
// sayMyNmae();

// functin which isnt returning anything xD
// function addTwoNumber(number1, number2) {
// //     console.log( number1 + number2 );
// // }

// // js can give you idk some weird outputs here
// // addTwoNumber(3, "a") //3a



// // parameter :- jab function likhte time hum function me jo value likhte hain as a deffiniton they are fking called fkin parameters.

// // arguments :- jab function ko call karte time jo values pass karte hai they are fkin called arguments


// const result = addTwoNumber(3,5)

// console.log("Result: ", result); //undefined coz funtions ne ghnta kuch return nhi kra


// // fuctnion which is returning something
// function addTwoNumber(number1, number2) {
//     let result = number1 + number2
//     console.log("hiii aryan");
//     return result
// }

// addTwoNumber(45,4)  //functnions excture hoga toh hii aryan toh print hoga but funtion is returning some value toh jab tk uss value ko store karake ya directly log nhi karaoge tb tk ghnta woh kahing pr show nhi hogi
// const result1 = addTwoNumber(3,4)
// // console.log("Result: ",result1);

function loginUserMessage(username) {
    if(!username) {
        console.log("jo bhi usernmae nhi dalega woh bhadwa");
        return
    }
    return `${username} logged in`
}


// ab hummne isko kra run 
loginUserMessage("linus")

// console me ghnta kuch output nhi aayega coz usne value return kri hai log thode nah kuch kiya....and to see this you have to fkinf log this value or fkin store the returned value and then log it 

console.log(loginUserMessage('linus'));
// +++++++ OR ++++++

let output = loginUserMessage("batakh")
console.log(output);

// also jab koi MADARCHODH value hi pass nah kare toh kya hoga ??
console.log(loginUserMessage());
// toh undefined aayega us username ki jagah coz it was never defined to be honest

// hence aisi bkchodiyon se bachne ke liye we should use if conditions and all ki agar username nhi daala toh gaali dedo 

function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(45, 200, 400));
// ull get only the first one baki sb ko lega hi nhi woh 

console.log(calculateCartPrice(45, 56, 70,4565465,45));
// to avoid thiss we are gonna user ---> rest operator <---- that is ...
// thats what gonna help alot 
// it will put all the things into an arr so beautiful xD

function calculateCartPrice_2(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice_2(45,42,47,458));


const user = {
    username: "aryan",
    price: 199
}

// how to pass this fking object into a fucntion

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)

// orr

handleObject({
    username: "linu",
    price: "999",
    age: 21
})

// how to pass arr in to a fucntion
const myNewArray = [200, 3000, 6900, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
// or

// directly bhi arr ko pass kar skte ho 
console.log(returnSecondValue([200, 400, 500]));


