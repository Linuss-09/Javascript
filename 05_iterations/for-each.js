const coding = ['js','ruby','java','cpp','c']

// method 1
coding.forEach(function (val){
    console.log(val);
})

// callback function ks name nhi hota hai
//  -->> kyunki yeh arr ke andar chl rha ha hence this function will autometically bring coding[i] as the parameter isliye --->we can call it anything like item , val, i , bkl, etc

// so item = coding[i] 


// method 2 ----> using arrow fn
coding.forEach( (val2) => {
    console.log(val2);
} )

// yahan  pr arro funti me hum function keyword use ni karte the hence woh hata diya 
// also we did one more thing that is removed the name as well coz it's a fking callback mfk
// and baki sb same hi hai bdsk


// 
function printMe(item) {
    console.log(item);
}


// so we can also pass some other function as parameter
// coding.forEach(printMe(item))  //this is wrong coz hume us fn ka reference yahan dena hai bsdk yeahn exceute nhi kar dena hai madarchdh

coding.forEach(printMe)


// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "Javascript",
        languageFileNmae: "JS"
    },

    {
        languageName: "Java",
        languageFileNmae: "java"
    },

    {
        languageName: "c++",
        languageFileNmae: "cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item);  //gives the object
    console.log(item.languageName); //to acess the the languageNmae
})