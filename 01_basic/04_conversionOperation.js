// node 01_basic/04_conversionOperation.js


console.log(2>1);//true
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2!=1);
//when you conpare data type should same 
console.log("2">1);//conver into 2 true
console.log("02">1);//same true

//convert
console.log(null > 0);// 0 > 0
console.log(null == 0);// 0 == 0
console.log(null >= 0);// true -> not given predictable result 


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);

/*
if we are check "2"==2 first it will perform convertion 
then give result(check anly value )


if we are check "2"===2 then it will check 
dtatatype then value(check data type then value)
*/

console.log("2"==2)//false
console.log("2"===2)//false