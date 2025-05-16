let marvel_heros = ["thor","ironman", "spiderman"]
console.log(marvel_heros);
const dc_heros = ["Batman", "superman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// // bda hi chutiya syntax hai no needto do such kinda shit write clean code thats what matters the most
// console.log(marvel_heros[3][1]);

// concat:- returns a whole fkin new arr isliye isko store karana padega

// marvel_heros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// newArry = marvel_heros.concat(dc_heros)
// console.log(newArry);

// spread :- we can achieve the same thing using way too...asume humare paas 2 kaach ki glass hain an humne dono gira diye toh woh spread ho gye now they kinda merged coz now woh dono ek jaise ho gye kindaa
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


// flat method to handle such messy situation
const another_array =  [1,2,3 ,4,[4,5,3,],2,3,[1,[2,3,4]]]

const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr);

// to convert another data into arr and aot find if someone is arr or not 
console.log(Array.isArray("Danerys"));
// converts everything into arr
console.log(Array.from("Danerys"));

console.log(Array.from({name: "Dany"}));   //interesting

// how to make arrr from given variables
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// just revise them and little read bout them :))