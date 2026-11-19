// string - Sequence of character - text, word, string

    // 1. Single Quote ('') - String Literal
    // 2. Double Quote("") - String Literal
    // 3. Backtick(``) - Template Literal

    let singleQuote1 = 'This is a single quote string'
    let doubleQuote1 = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. Multi-line string

    let multiline1 = `This is 
    a multi-line
    string`

    // 2. For string parameterisation - Call a variable inside a string
    // ${variableName}
    // Data driven testing in PW

    let age1 = 30

    let message1  = `Your age is ${age1}`
    console.log(message1)
    
    let char1 = 'c'


console.log("*******************************************")

let str1 = "Welcome to Typescript"

// 1. length - Return the number of characters in a string

// Syntax:
// string.length

console.log(str1.length)

// 2. charAt(index) - Return the character available at the specified index

console.log(str1.charAt(10))

// Assignment - 2:
// "abcdabcd" - a2b2c2d2

// 3. concat(str1, str2,.....) - merges all the string together and return 
// a NEW string

// stringName.contact(str2, str3,...)

let str2 = " and Javascript"

let str3 = " also Playwright"

let str4 = str1.concat(str2)
console.log(str4);


console.log(str1)

// 4. includes(substring, startIndex?)
// 5. indexOf(sarchValue, startIndex?)
// 6. lastindexOf(searchValue, startIndex?)

// What is difference between slice() and substring() in string?

// 7. slice(startIndex?, endIndex?) - Return the portion of a string

console.log(str1.slice())
console.log(str1.slice(2,9))
console.log(str1.slice(9,2))

// 8. substring(startIndex, endIndex?) - Return a portion of the string

console.log(str1.substring(2,9))
console.log(str1.substring(9,2))









