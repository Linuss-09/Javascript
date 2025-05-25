const myNumbers = [1,2,3,4,5,6,7,8,9,10]

/* // Map method
const newNums = myNumbers.map( (num) => num + 10 )
console.log(newNums); */

// chaining :- using 2 or more method together to get the shit dn mfk

// see jo next method hoga uske liye nums ki value hogi uske previous method se returned value.....ab smajh jao idk how to put this things into simple words.....well yk what i wanna say....fk you love you 
const newNums = myNumbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1  ) ///iske liye num will never be 1....it will be 10..coz pichle map ne 10 return kara ohkayyyyy???
                .filter( (num) => num >= 50)

    console.log(newNums);