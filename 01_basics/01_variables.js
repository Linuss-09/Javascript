const accountId = 144553
let accountEmail = "aryan@google.com"
var accountPassword = "12345"
// u can create a variable without using any of the three but its not recommanded as only bastards use em....
accoutnCity = "Jaipur"

let accountState
// ul'get undefined as itsnto been intialised yet
console.log(accountState);


// accountId = 2;//  not allowed

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "23"
accoutnCity = "bengaluru"
console.log(accountEmail);

/*
dont you dare to use var  :)
coz of the issues in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accoutnCity, accountState]);


