let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())

console.log(typeof myDate); //Object

let myTimeStamp=Date.now()

console.log(myTimeStamp.toLocaleString())