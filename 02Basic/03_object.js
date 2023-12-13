const kak=new Object()

const cat={}

cat.id="123"
cat.name="Indian"
cat.sell=false

console.log(cat)

const kakka={
    email:"sadsd@gmail.com",
    fullname:{
        firstname:"Xsam",
        lastname:"Ybahadur"
    }
}

console.log(kakka)
console.log(kakka.fullname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj={.obj1, .obj2, .obj3}
const obh={...obj1, ...obj2, ...obj3}

//console.log(obj);
console.log(obh);


const course={
    name:"kemon",
    kakk:"jio"
}

console.log(course.kakk);
const kakk="jio"

const{kakk:ka}=course
console.log(ka);