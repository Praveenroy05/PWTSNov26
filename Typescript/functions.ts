// Functions - It is a set instruction that performs specific task.

function login(email:string, password: string){
    // fill the username
    // fill the password
    // click on the login button
}


// 100 - login(email, password)

// 100 test cases - 300 lines of code - 195

// Duplication - Solve the problem of duplication
// Maintenance - 100 test cases to fix the issue - 99 steps
// Reusability - We can resue the same function anywhere


// 1. Named Function - Function Declaration - If you want to reuse the function multiple times
// 2. Anonymous Function - Function Expression - Callback function
// 3. Arrow Function - Lambda function - Callback function
// 4. Constructor Function - Class


// 1. Named Function - Function Declaration - A function which will be declared along
// with the name is known as Function Declaration

// Syntax:

/*

function functionName(parameter:datatype(optional)):returnType(optional) // Defining the function
{
    // block of the code
    return
}

functionName(arguments) // Calling the function


*/

// parameter -return

// 1. Non-parameterized and non-returning function

function greet(){
    console.log("Hello, welcome to Typescript")
}

greet()

// 2. Non-parameterized and returning function

function greeting(){
    return "Welcome to Playwright"
}


let result = greeting()
console.log(result)


// 3. Parameterized and non-returning function

function add(a:number,b:number){ // a, b - Parameter / variable
    console.log(a+b) 
}

add(10,20) // 10,20 - Argument


// 4. Parameterized and returning function

function addition(a:number, b:number, c:number){
    
    add(10,20)
    return a+b+c
}

let sum = addition(20,30,40)
console.log(sum);

let results  = sum*10
console.log(results)


let sum1 = addition(40,50,60)
console.log(sum1);


// 2. Anonymous Function - Function Expression - A function which will not have any 
// name. A function which is declared without any name that function will be stored
// inside a variable. The variable where we store the function becomes the name of
// the function

// Syntax:

/*

let variableName = function(parameter){
   // block of code
}

variableName()


*/


let fun = function(a:number, b:number){ // a = 10000, b = 20000
    return(a+b);
}


let sums = fun(10000,20000)
console.log(sums)

// Callback function - A function which will be utilised as a parameter of another 
// function is known as callback function


function adds(func:Function){  // func  = function(){}
    func()
}

// fun  - Callback function

// let fun1 = function(){
//     console.log("This is a callback function");
// }

adds(function(){
    console.log("This is a callback function");
});


// 3. Arrow function - Function expression (=>) - Lambda Functions - ES6 -2015

// 1. This is also a part of anonymous function and will not have any name
// 2. This function will be declared using => arrow symbol after the paranthesis()
// 3. Arrow function use to shorten the number of lines of code
// 4. If there is only one line of code inside the function then we can skip the 
// curly braces inside the arrow function
// 5. If there is only one line of code inside the function then we can skip the 
// return keyword as well. By default the function is considered as returning function





let arrow = (a:number, b:number) => a+b

let arrowSum = arrow(200, 249)
console.log(arrowSum)



// Default parameter and Optional Parameter

function sum2(a:number, b:number=90){
    console.log(a+b)
}


// Method Overloading is a process where you can define the same method name 
// with different parameter

sum2(50)
sum2(50, 900)

function display(name:string, age?:number){
    console.log(name, age);
}

display("Priya")
display("Raj", 25)


// 10 + undefined - NaN


// Assignment - Complete the "display" function by writing the logic to print name
// if age parameter has not been given any value and print both name and age if age 
// has also been given at the time of calling the function