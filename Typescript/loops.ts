// Loops - Will execute the same block {...} of code multiple times 
// until the condition is false.

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("**************************")

// for(let i=1 ; i<6; i++){
//     console.log(i) 
// }

// [ 1,2,3,4,5]

// 1. for loop

    // a. for loop - Traditional for loop - 
    // When we know that how many time we have to run the iteration

    // b. for of loop - Loop through the iterable object - array, string,...
    // c. for in loop - Loops through the properties of an object
    // {key : value} - {name : "Rahul"} - Object - {"key": "value"}


// 2. while loop - When we do not know how many times we have to run the iteration
// 3. do while loop - When we want to execute the block of code atleast once before we check the condition


// Drop down - Countries - for loop - 250/300
// Data driven testing - [] -  for of loop
// Calendar - date - while loop
// Pagination - While loop
// Login page - enter username/password - do while



// 1. for loop
// Syntax:

// let n  - declaration
// let m = 10 - initialization

/*

for(initialization; condition; increment/decrement)
{
    // block of code to be executed
}

Initialization - Initialize the value of the variablt to start the iteration. let i=1

Condition - Condition to check if the loop should continue or not. Ex: i<=5

Increment/Decrement - Increase or Decrease the value of the variable to move towards the condition
Ex: i++ /i--


*/

// 1 to 5

for(let i=1 ; i<=5; i++){ // i= 6<=5
    console.log(i) // 1 2 3 4 5
}

console.log("*******************************************")

// 10 to 1

for(let i=10; i>=1 ; i--) // i>=1; i>0
{
    if(i==5){
        continue
    }
    console.log(i) 
}

// break - To exit the loop when a certain condition is met
// continue - To skip the current iteration and move to the net iteration


console.log("****************************************")

// 2. while loop
// Syntax:

/*

initialization - let j=1

while(condition){
    // block of code
    increment/decrement - j++/j--

}


*/

// print 1-10
let j = 1

while(j<=10){
    console.log(j)
    j++
}

console.log("******************************************");

let attempt = 0

while(true){
    if(attempt>=3){
        console.log("Please enter the correct username or password");
    }
    else{
        console.log("You account has been locked");
        break
    }
    attempt++
}


console.log("***********************************************")

// 3. do while loop - 

// Syntax:

/*

initialization - let k = 1

do{
    // code to be excuted
    // increment/decrement
}while(condition);


*/

let attempts = 0

do{
    console.log("Please enter the correct username or password");
    attempt++

}while(attempt>=3);

console.log("******************************");


let var1 = 0
while(var1>=3){
     console.log("Please enter the correct username or password");
    var1++
}