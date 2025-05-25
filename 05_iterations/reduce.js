const myNums = [1,2,3]

/* // using Normal fn
const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`acc = ${acc} , currval = ${currVal}`);
    return acc + currVal
}, 0 )
// acc me , ke baad wali value jaati hai bsdk
 */


// Using Arrow Fn
// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc= ${acc}, currVal= ${currVal}`);
//     return acc + currVal}, 0)

// also here currVal = myNUms[i]


// using arrow fn without scope or {}
const myTotal2 = myNums.reduce( (acc, currVal) =>( 
    console.log(`acc= ${acc}, currVal= ${currVal}`),
    acc + currVal), 0)

// using arrow fn in 1 line ahhhhhh cooooooll duedeeeee is here
const myTotal3 = myNums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(myTotal);
console.log(myTotal2);
console.log(myTotal3);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "DS course",
        price: 12999
    },
]

// task is to add all the price in the shopping cart
// here item = shoppingCart[i]
const priceToPay = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(priceToPay);