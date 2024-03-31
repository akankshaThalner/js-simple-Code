const accountId =1234;
/*


'const' declarations must be initialized.
we can not change const are fix values 
for example like  PI = 3.14

we are use const key word to declare const value 

*/

// we can declare variable in two type 


let accountEmail = "akshu@goole.com";//not change data type 

var accountPassword = "11111";//can change data type

accountCity = "Jalgoan"

let accountState;

/*
withouth declaring variable type we can declare variable 
if you declare any variable withouth value then it vlues is 
(undefines)

*/



//accountId =1234;// not allowed


accountEmail = "ak@goole.com";
accountPassword ="222222";
accountCity = "Bengaluru"



console.log( accountId);
/*
Prefer not to use var
becose of issue in 
block scope and function scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


