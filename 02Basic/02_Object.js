//Object Literal

const JsUser={
    name:"Jio",
    age:7,
    email:"Jio.com",
    location:"Mumbay"
}

console.log(JsUser.email);
console.log(JsUser["email"]);

JsUser.greeting=function(){
    console.log(`Hello kaka ${this.name}` );
}

console.log(JsUser.greeting);