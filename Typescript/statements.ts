// Conditional Statement - It allows us to execute the different block of code {...}
// based on different condition result

// 1. if statement - This will handle only the positive scenario
// 2. if else statement - This will handle both the positive and negative
// 3. if else if else statement - This will validate more than 1 condition
// 4. switch statement - This will also validate the multiple conditions
// 5. Ternary Operators (? :) - Short form if else statement


// 1. if statement - Country drop down - 250 - India
// 2. if else statement - Check if the test case have passed or passed
// 3. if else if else statement - Cross browser or cross platform
// OR switch statement


// 1. if statement - It will execute the if block of code only if the 
// condition is true

// Syntax:

/*

The condition will be validated, if the condition is true if block of code will be executed
else if the condition is false nothing will happen

if(condition){
    // code
}


*/


let country = "India"

if(country == "india"){ // "India" = "india"
    console.log("The country name is matching")
}


// 2. if else statement - If the condition is true then if block of code will be
// executed otherwise the else block of code will be executed.

// Syntax:

/*

if(condition){
    // code
}
else{
    // code
}


*/

if(country == "india"){ // "India" = "india"
    console.log("The country name is matching - if")
}
else{
    console.log("Country name is not matching - else");
}


// 3. if else if statement - It will validate multiple conditions. Depending on the result
// of the condition, the specific block of code will be executed.

// Syntax:

/*

if(condition1){
   // code - if the condition1 is true this block of code will be executed
}
else if(condition2){
    // code - if the condition2 is true this block of code will be executed
}
else if(condition3){
   // code - if the condition3 is true this block of code will be executed
}
else{
    // code - If none of the conditions are true
}


*/


// Cross browser testing

let browser  = "edge"

if(browser == "chrome"){ // "edge" == "chrome"
    console.log("Launch the chrome browser");
}
else if(browser == "firefox"){ // "edge" == "firefox"
    console.log("Launch the firefox browser")
}
else if(browser == "safari"){ // "edge" == "safari"
    console.log("Launch the safari browser")
}
else{
    console.log("Invalid browser")
}

// 4. switch statement - Switch will compare the case value. It checks if the any
// case value is available as similar to the expression or not. If it is available
// It will directly jumpt to that particular block of code

// break keyword is mandatory in switch statement - it terminate the execution

// Syntax:


/*

switch(expression)
{
    case "value":
        // block of code
        break;
    case "value1":
        // block of code
        break;
    case "value2":
        // block of code
        break
    default:
        // block of code
}


*/

let broswerName = "edge"

switch(broswerName) 
{
    case "chrome":
        console.log("Launch the chrome browser - switch")
        break
    case "firefox":
        console.log("Launch the firefox browser - switch")
        break
    case "safari":
        console.log("Launch the safari browser - switch")
        break
    default:
        console.log("Invalid browser - switch"); 
}

// When to use if else if statement:
// 1. Range available in the condition - We have to use if else if
// 2. Multiple datatypes ot be validate - name = "Rahul", age = 25
// 3. Logical operator for the validation - &&, ||

// When to use switch statement
// 1. Simple validation with single datatype and single value to compare
// 2. Should not have any range in the condition
// 3. No logical operator



// 5. Ternary Operator (? :) - This is similar to if else but it uses inline


// Syntax for if else

/*
if(condition){
    // code
}
else{
    // code
}

*/

// Syntax for TO:

// condition ? execute this if true : execute this if false

let age = 10;

/*

if(age >=18){
    console.log("You are eligible for voting")
}
else{
    console.log("You are not eligible for voting")
}

*/

(age>=18) ? console.log("You are eligible for voting") : console.log("You are not eligible for voting")


// Assignment:

// Write a program to display the grade of a student:
// >90 - A
// >80-90 - B
// >70-80 - C
// >50-70 - D
// <50 - Failed
