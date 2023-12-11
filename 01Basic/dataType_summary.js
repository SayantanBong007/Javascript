// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
//call by value 

//Reference(Non primitive)
//call by reference
//Array, Object, Function

let myObj={
    name:"sam",
    age: 21,
}

/* interview related questions 

- primitive and non primitive (call by value, call by reference)

- primitive:7 (call by value)

- string, number, bolean, null, undefined, symbol , BigInt

- non primitive:3 (call by reference)

- arrays, object, function 


- dynamically type vs statically type

- js is dynamically typed

- const id = Symbol("123")

- const anotherId = Symbol("123")

- id === anotherId => false

- array, object, function overview 

- typeof datatyped is available on documentation 

*/

//++++++++++++++++++++++++++++++++++++

//Stack(Primitive) , Heap(Non-Primitive)

/* - Primitive data type goes to Stack we get a copy of that value.
- Non-Primitive data type goes to Heap we get refrence of that value.  */

/*Primitive types like numbers, strings, etc., are straightforward. They go to the stack, and when you work with them, you're actually working directly with the value itself. It's like having a copy of that value in your hand.

Non-primitive types like objects or arrays are more complex. They go to the heap, and when you work with them, you're actually working with a reference to where that value is stored in memory. It's like having a signpost that tells you where to find the value rather than holding the value directly.

So, primitives are like having the thing itself, while non-primitives are like having directions to where the thing is kept. */