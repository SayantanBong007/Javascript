const month=3
switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Fab");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Default match");
        break;
}

//************************************************** */

//falsy Values

//false,0,-0,Bigint,on,"",null,undefined,NaN

//truthy Values

//"0",'false'," ",[ ],{},function(){}

//************************************* */

//Nullish Coalescing Operator(??):null undefined

let val1;
//val1=5??10
//val1=null??10
val1=undefined??15

console.log(val1);

//************************************** */

//Terniary Operator

//condition ? true:false


