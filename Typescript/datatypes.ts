// Data Types - Which defines what type of data a variable is storing

// Syntax:
// keyword(var/let/const) variableName :datatype(optional) = value

// int i = 10

let abc :any = 76
abc = "TS"
abc = true
abc = null
abc = undefined

// There are 2 types of datatypes:

// 1. Primitive data types - Only have a single value

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. union (|) - Combination of multiple data type
    // 7. any
    // 8. void - Function


    // 1. number - Combination of integer(98, -68) and floating point number(67.43, 23.56)

    let num11:number = 90.45 // Type Annotation
    let num12 = 45 // Type Inference

    // typeof - which return the datatype of a variable

    console.log(typeof num12)

    // What is difference between Type Annotation and Type Inference

    // Whenever we define the datatype of a variable explicitly is known as Type Annotation
    // Whenever JS & TS is able to identify the datatye of a variable implicitly is 
    // known as Type Inference

    // 2. string - Sequence of character - text, word, string

    // 1. Single Quote ('') - String Literal
    // 2. Double Quote("") - String Literal
    // 3. Backtick(``) - Template Literal

    let singleQuote = 'This is a single quote string'
    let doubleQuote = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. Multi-line string

    let multiline = `This is 
    a multi-line
    string`

    // 2. For string parameterisation - Call a variable inside a string
    // ${variableName}
    // Data driven testing in PW

    let age = 30

    let message  = `Your age is ${age}`
    console.log(message)
    
    let char = 'c'

    // 3. boolean - true/false

    console.log(10>40)

    // 4. null - Intentional absense of a value

    let num13:null = null


    // 5. undefined - YOu have defined a variable but have not assigned any value to it

    let num14 // Declaration
    console.log(num14)

    // Note:
    // 1. By default any type of variable will have a value as "undefined"
    // 2. By default the datatype of a variable will be "any"
    

    // 6. union (|) -  (|) is known as union

    let num15 : number | string = 10
    num15 = "TS"

    // 7. any - It is free to accept any type of datatype
    // Migration of a project from JS to TS

    let num16:any = 10
    num16 = "Python"
    num16 = undefined
    num16 = null
    num16 = false

    console.log(num16);
    
    


// 2. Non-primitive data types - Can store more than one value
    // 1. Array
    // 2. String
    // 3. Object
    // 4. Function