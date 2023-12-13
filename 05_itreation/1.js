//for of 

const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num)
}


//Maps

const map=new Map()
map.set('IN',"India")
map.set('As',"Austrilia")
map.set('Fr',"France")

console.log(map)

//***************************** */

const coding=["js","ruby","java","phython","cpp"]

coding.forEach(function(val){
    console.log(val)
})
coding.forEach((items)=>{
    console.log(items)
})