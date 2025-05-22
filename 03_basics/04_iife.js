// immediately invoked fucntion expression (iife)
/* 
jo functionn immediatley execute ho jaye and tehy are used to prevent global scope pollutions
*/

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// semicolorn lagana zaruri hia
// arrow

( (name) => {
    // Unanmed IIFE
    console.log(`hello ji ${name}`);
})("linus")
// iife me argument aese paas karte hain  

// 2 iife likhte time semicolon lagana is compulsory 
