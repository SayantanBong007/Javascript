//Immediate Invoked Function Expression(IIFE)

(function chai(){
    console.log((`JIO kaka`));
})();

/*IIFEs are great for preventing global scope pollution. When you declare variables or functions inside an IIFE, they don't leak into the global scope, keeping your global space cleaner and reducing the chance of naming conflicts with other scripts or libraries.*/
// Without IIFE - Polluting Global Scope
var globalVar = "I am global";

function regularFunction() {
  // This variable 'innerVar' gets added to the global scope unintentionally
  innerVar = "I am also global";
}

regularFunction();

console.log(globalVar); // Outputs: I am global
console.log(innerVar); // Outputs: I am also global

// With IIFE - Preventing Global Scope Pollution
(function() {
  var localVar = "I am local";

  // 'innerVar' is not leaked to the global scope
  var innerVar = "I am private";

  console.log(localVar); // Outputs: I am local
  console.log(innerVar); // Outputs: I am private
})();

// These will throw ReferenceError as 'innerVar' and 'localVar' are not accessible here
console.log(innerVar);
console.log(localVar);