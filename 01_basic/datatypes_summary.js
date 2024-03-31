// node 01_basic/datatypes_summary.js
/*
how many type of data type is js?
ther are 2 type of data type is js

primative and reference ?

primative types are nothing but the 
Number Boolean Undefined 
BigInt null String symbol


reference typre are 
array
function
object



*/
/*
const id1 = Symbol('123');
const id2= Symbol('123');
console.log(id1===id2);//false

const heros = ["shaktiman","naagraj","doga"];

let myObj={
    name:"akshu",
    age:22,
}
const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof myFunction);
console.log(myFunction);
console.log(typeof myObj);
console.log(myObj);
console.log(typeof heros);
console.log(heros);
console.log(typeof id2);
console.log(id2);
console.log(typeof id1);
console.log(id1);
console.log(typeof null);
console.log(null);
let bi=1111111111n;
console.log(bi);
console.log(typeof bi);
//1111111111n
//bigin



function
[Function: myFunction]
object
{ name: 'akshu', age: 22 }
object
[ 'shaktiman', 'naagraj', 'doga' ]
symbol
Symbol(123)
symbol
Symbol(123)
object
null
*/


//how many type of memory ?
//1]stack - store primary data type
//(pass copy of data  org not change)
//2]heap - store reference data type 
//(pass reference i=of data org change)


let myYouthubename = "one"

let myanotherYouthubename = "two"
myanotherYouthubename="three"
console.log( myYouthubename )
console.log( myanotherYouthubename);


let userOne={
    email :"user@googel.com",
    upi:"user@upi"
}
let userTwo = userOne

userTwo.email="gmail.com"
console.log(userOne.email);
console.log(userTwo.email);