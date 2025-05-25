// const coding = ['js','ruby','java','cpp','c']

// const values = coding.forEach(  (item) => {
//     console.log(item);
//     return item 
// })

// console.log(values);

// foreach loop doesnt return anything 

 const myNums = [1,2,3,4,5,6,7,8]

// filter :- just a fkin functino which actuallu return the value along with iterations so....
// parameter me yeh bhi callback hi leta hai which can be normal or arrow fucntnio as well but the main thing is we also have to give 

// a fuking condn as well ...and jis jis item ke liye woh cndn true hoti hai use woh return kar deta 

// method -1
const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums);


const newNums2 = myNums.filter( (num) => {
    return num > 4
    // we used curly braces(or scope) here and thats why humko return likhna hi padega nhi toh kuch nhi hona yeha pr ulta empty arr log ho jayegi
    // ....understand this thing bro
})


// hoe o do the same thing with foreach
const newNums3 = []

myNums.forEach( (num) => {
    if(num>4) {
        newNums3.push(num)
    }
})

console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   bro yahan pr bk = books[i] kinda thing and then we are acessing each object and using . we can get their things mfk :))
let userBooks = books.filter( (bk) => bk.genre === 'History' )

userBooks = books.filter( (bk) => {bk.publish >= 2000})
// will not return anythign coaz you are using {} and still not writing return keyword.....hence you'll get an empty fking arr


userBooks = books.filter( (bk) => { return bk.publish >= 2000})
// it's fine mfk just like your mom

// history + after 1995 so
userBooks = books.filter( (bk) => bk.genre === 'History' && bk.publish >= 1995)

console.log("hiii");
console.log(userBooks);