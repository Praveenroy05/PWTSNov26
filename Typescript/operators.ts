// Operators - Operators is a symbol that performs various operations

// 1. Arithmetic Operators
// 2. Comparison Operations
// 3. Logical Operators
// 4. Assignment Operators
// 5. Ternary Operators - If else statement


// 1. Arithmetic Operators - Used to perform mathematical calculation

    // 1. Addition (+)  - Addition  or concatination
    // 2. Subtraction (-)
    // 3. Multiplication (*)
    // 4. Division (/)
    // 5. Modulus (%) - Remainder
    // 6. Exponential (**)
    // 7. Increment (++) - Increases the value 1
    // 8. Decrement (--) - Decreases the value by 1


let number1 = 10
let number2 = 3
let number3 = "10"

console.log(number1 + number2)
console.log(number1 + number3)

console.log(number1 - number2)
console.log(number1 * number2)

// 4. Division (/)
console.log(number1/number2) // 10/3 - 3.33333

// 5. modulus (%) - Remainder after the division
console.log(10 % 3) // 0

// 6. Exponential (**) - Power
console.log(number1 ** number2); // 10 ** 5 - 10^5 - 10*10*10*10*10

// 7. Increment (++) - Increases the value of the variable by 1

let num2 = 10

    // a. Pre-increment (++num3)  - First the value of the variable will be incremented
    // and then the action will be perform.

    console.log(++ num2) // ++ 10 // 11 // ++num2 or num2++ => num2 = 10+1
    console.log(num2) // 11, 11
    
    

    // b. Post-increment (num3++) - First the action will be performed and then the
    // value of the variable will be increment.

let num3 = 5
console.log(num3++) // 5++ - num3 = num3+1 / 5
console.log(num3) // 6

// 8. Decrement Operator (--)

console.log("***********************************************");


// 2. Comparison Operators - Used to compare the two values and return the result
// in the form of boolean (true/false)

    // 1. Equal to (==)
    // 2. Not Equal (!=)
    // 3. Strict Equal to (===)
    // 4. Strict Not Equal to (!==)
    // 5. Greater than (>)
    // 6. Greater than or Equal (>=)
    // 7. Less than (<)
    // 8. Less than or Equal (<=)


    // What is diff between =, == and ===?
    // Type conversion and Type coercion?


    let num4 = 10
    let num5 = 10

    // 1. Equal to (==) - Check if the two VALUES are same or not

    console.log(num4 == num5)

    // 2. Not Equal to (!=)

    console.log(num4 != num5)


    // Type coercion -  Implicit conversion of one data type into other datatype
    // Type Conversion - Explicitly conversion of one data type into other datatype

    // 3. Strict Equality (===) - Checks if the two VALUES along with DATATYPES
    // of the variable are same or not

    console.log(num4 === num5)

    // 4. Strict Not Equal to (!==)
    console.log(num4 !== num5)

// Assignment for 5-8

console.log(10 > 9);
console.log(10 >= 10);

console.log("***************************************************");

// 3. Logical Operators - Used to combine multiple conditions to get the final result.
// It will compare 2 expression and return use the result in the form of boolean.


    // 1. AND (&&) - Both of the conditions are true then only it will return us true
    // 2. OR (||)  - Either of the condition is true - it will return us true
    // 3. NOT (!)  - It will reverse the result from true to false and vice-versa

// 1. AND (&&)

// true && true - true
// true && false - false
// false && true - false
// false && false - false

console.log("AND (&&)", (10>6) && (20>13)) // true
console.log("AND (&&)", (10>6) && (20>130)) // false
console.log("AND (&&)", (10>60) && (20>13)) // false
console.log("AND (&&)", (10>60) && (20>130)) // false


// 1. OR (||)

// true || true - true
// true || false - true
// false || true - true
// false || false - false


console.log("OR (||)", (10>6) || (20>13)) // true
console.log("OR (||)", (10>6) || (20>130)) // true
console.log("OR (||)", (10>60) || (20>13)) // true
console.log("OR (||)", (10>60) || (20>130)) // false

// NOT(!) - Reverse the result
console.log(!true)
console.log(!false)



// 4. Assignment Operator (=) - Assign the value to a variable

let m = 100

// =, ==, ===