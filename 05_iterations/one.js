// for

// for (let i = 0; i < 10 ; i++) {
//     const element = i
//     if (element == 5) {
//         console.log("5 is horny no.");
        
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         const element = j;
//         // console.log(`inner loop value ${j} and outer loop ${i}`);
//         console.log(i+ " * " + j + " = " + i*j );
//     }
// }


// let myArray = ["dany", "jon", "bran","ned","tyrion", "Jamie"]
// console.log(myArray.length);
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);
// }


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log("detected 5");
//         break
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}

