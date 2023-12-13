const user={
    username:"jio",
    price:470,

    messa:function(){
        console.log(`${this.username},hello ji`);
    }
}

user.messa()

//Arrow Function
//()=>{}

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(4,5));

const addtwo=(num1,num2)=> num1+num2

console.log(addtwo(1,2))
