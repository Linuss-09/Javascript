let myDate =  new Date()
// its fkin unreadable bro
console.log(myDate);
// convert it to string and make readable at least 
// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let myCreateDate = new Date(2025, 4, 15, 9, 45, 59, 99)


let myCreateDate2 = new Date("2023-00-14")
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleTimeString());
console.log(myCreateDate.toLocaleDateString());
// this one is really dope tbh
console.log(myCreateDate.toLocaleString());
console.log(myCreateDate2.toString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreateDate.getTime());

// to convert time into second from ms
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "long",
    timeZone: ""
})
