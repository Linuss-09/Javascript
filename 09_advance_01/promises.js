// most of the time we are just consuming the promises

// how to make the mfkin promises
const promiseOne = new Promise(function(resolve, reject){
    // do the assync task now
    // like DB calls, cryptpgraphy, network
    setTimeout(function() {
        console.log('Async task 1 completed');
        resolve()
    }, 1000);
    // but wtf does resolve and reject actually did
})

// .then ka conenction hai reoslve ke saath and to consume a promise we just take that mfk and uske saath hum .then wagerah laga dete hain 

// also .then ke ander ek callback jata hai as an arg

promiseOne.then(function() {
    // this will only run when the thing is actually completed and promise resolve ho tbhiiiii
    console.log("promise 1 consumed");
})

// type 2 of writing promise 2
new Promise((resolve, reject)=>{
    setTimeout(function(){
        console.log("async task 2 done");
        resolve()
    },1000)
}).then(function(){
    console.log("promise2 reoslved and consumed bruh");
})

// type 3 
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve likha hai yahan par
        resolve({username: "dany", email:"dany@got.com"})
    }, 1000)
})

// how we are goona take the data from the resolve into then 
// here data is the data from the resolve funtion of promise 3 
// so basically resolve ke andar ka parameter is the fkin data
promiseThree.then(function(data){
    console.log('hii');
    console.log(data);
})


// promise 4
const pormiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = Math.random() < 0.5
        if(!error) {
            // resolve kr do error hai hi nhi bc
            resolve({username: "jon", password: "dany@jon"})
        } else {
            // what if usne reject kar diya
            reject('ERROR: soemthing went wrong')
        }
    }, 1000);
})

pormiseFour
.then(function(userData){
    console.log(`${userData.username} ki jai ho jaye bc`);
    return userData.username
})
.catch(function(error){
    console.log(error);
})
.then((userData2) => {
    console.log(userData2);
}).finally(() => {
    console.log("the promise is finally reoslved or rejceted idk........but he's done with you "); //finally hamesha execute hoga kinda like farewell msg or soemthign
})

// CHAINING :- jo upar wala .then/.cathc hai usme se jo vlaue return hoke aayi hai that is just fking chaining mfk


// promise 5
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout( function(){
        let error = true
        if(!error) {
            resolve({username: "javascript", password: "js123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    } ,1000)
})

// consume the promise using assync await
// define an async fn
async function consumePromiseFive () {
    // await promiseFive now and usko ek variable me hold karlo to get the response
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//     // await coz network req hai time lagega nah meri jaan
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//     // response .json bhi time leta hai to convert things hence usko bhi await karana padega
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// using .then.catch and all that fking thing 

// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((responseTwo) => console.log(responseTwo))
.catch((error) => console.log("ERROR:", error))