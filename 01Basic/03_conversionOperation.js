"Use strict";
let score ="33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);

console.log(typeof valueInNumber);

//string=>Number
//"33"=>33
//"33abc"=>NaN
//true=>1 false=>0

let kaka=1
let valueInBoolean=Boolean(kaka);
console.log(valueInBoolean);
console.log(typeof valueInBoolean)

//1=>true 0=>false
//" "=>false
//"hitesh"=>true

let jio=63
let valueInString=String(jio)
console.log(valueInString);
console.log(typeof valueInString);

//****************Operation********************

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
