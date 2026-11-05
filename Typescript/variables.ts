// Variables - Storage/Container - Which store either a single value or multiple values

// There are 3 ways in which we can declare a variable in JS & TS:

// Syntax:

// Keyword(var/let/const) variableName = Value - JS
// Keyword(var/let/const) variableName:datatype(optional) = value - TS

var i = 10 // JS
let j = "10" // TS

j = "JS"

const k = 90

// k = 100

// var - In modern JS & TS we do not use var keyword > version 5 - (ECMA SCRIPT 6 - 2015)
// let - If we know that the value of the variable can change at any point of time
// const - To declare a constant variable


// Scope of a variables:

// Local Scope - Whenever you try to declare a variable inside the {...}
// Global Scope - Whenever you try to declare a variable outside the {...}

let lang = "TS" // Global scoped variable


{
let lang = "JS" // Local scoped variable
    console.log(lang) // JS  
}


console.log(lang) // TS


// var - 

// 1. Scope - Functional or global
// 2. Whenever you declare a variable using "var" keyword it can be redeclared and
// can also be re-initialised.
// 3. Hoisting: We can access the variable before it's declaration as well.
// 4. It is not mandatory to assign the value at the time of declaration.


var num2 // declaration

num2 = true // initialised

// console.log(num1)

var num = 10
console.log(num)
// re-declaration
var num = 1000
var num = 100000
var num = 90.356
console.log(num)

// re-initialisation
var num1 = "TS"
num1 = "Python"


// let

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "let" keyword it cannot be redeclared and
// can be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is not mandatory to assign the value at the time of declaration.

// console.log(num3)


let num4

num4 = false


let num3 = 10
 // let num3 = 10 // Re-declaration is not allowed

num3 = 100000 // Re-initialisation

console.log(num3)


// const

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "const" keyword it cannot be redeclared and
// cannot also be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is mandatory to assign the value at the time of declaration.


const var2 = 90.56

// var2 = 100

// console.log(var1);


let var1 = "Python" // Global scope variable
// const var1 = true // Re-declaration is not possible
// var1 = "Java" // Re-initialisation is not possible

{
    let var1 = "TS" // Local scope variable
    console.log("Local scope", var1); // TS   
    // Local scoped will be given a preference  
}

console.log("Global scope", var1); // Python



// var - 

// 1. Scope - Functional or global
// 2. Whenever you declare a variable using "var" keyword it can be redeclared and
// can also be re-initialised.
// 3. Hoisting: We can access the variable before it's declaration as well.
// 4. It is not mandatory to assign the value at the time of declaration.


// let

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "let" keyword it cannot be redeclared and
// can be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is not mandatory to assign the value at the time of declaration.


// const

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "const" keyword it cannot be redeclared and
// cannot also be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is mandatory to assign the value at the time of declaration.


// Diff between var, let and const keyword
