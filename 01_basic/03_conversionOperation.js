// node 01_basic/03_conversionOperation.js
let score = "33"
console.log(typeof score);
console.log(typeof score);


let valueInNumber = Number(score)
console.log(typeof  valueInNumber);


let s = "33sbc"
valueInNumber = Number(s)
console.log(typeof  valueInNumber);//number
console.log(valueInNumber);//NaN  not a number



let n = null
let valueInNumber1 = Number(n)
console.log(typeof  valueInNumber1);
console.log(valueInNumber1);//0






let n1 = undefined
let valueInNumbe1 = Number(n1)
console.log(typeof  valueInNumbe1);
console.log(valueInNumbe1);//NaN

let b = true
let bb = Number(b)
console.log(typeof  bb);//number
console.log(bb);//1

//"33"=>33
//"33abc"=>NaN
//true =>1; false=>0


let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log( booleanIsLoggedIn);//true

//1=> true; 0=>false
//""=>false
//"aakshu"=>true



let someNumber =33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);