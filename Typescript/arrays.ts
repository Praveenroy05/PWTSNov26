// Array - []

let arr= [10, "JS", true, null, undefined, 10.76]
console.log(typeof arr);


/*

1. Array is a collection of data, which can have different data types.
2. Array is an ordered collection. Means we can also access the element from the array 
by using the position (index)
3. Index starts with 0 in an array
4. Array in dynamic in size.

*/

// Declaration of an array

// Syntax:

// let arrayName:datatype[] = [value1, value2,......]

let arr1:number[] = [10,20,304]

let arr2 = [10,"TS", true, 89.45]

console.log(arr1)
console.log(arr2);


// By using index - arrayName[index]  - index starts with 0

console.log(arr2[0])
console.log(arr2[1])
console.log(arr2[2])

// length - It return the total number of element available inside an array

console.log(arr2.length)



// 1. Traditional for loop

let arr3 = [10,20,30,"JS", "Python", true, false, 10.34]

// [0:10,1:20,2:30,3:"TS",.....]

for(let i=0; i<arr3.length; i++){
    console.log(arr3[i])
}


// 2. for of loop - Directly interact with the element

// Syntax:

let p; // declaration
let l = 10 // initialisation

/*

for(variable declaration of arrayName)
{
    body
}


*/

console.log("**************************")


for(let element of arr3){
    console.log(element)
}

console.log("************************* Method of an array **********************")

let arr4 = [10,20,30,40, "TS"]

// 1. push(ele1, ele2, ....) - It adds the elements to the end of an array
// Syntax:
// arrayName.push(ele1, ele2,....)

console.log(arr4)

arr4.push(50,"JS")
console.log(arr4);


// 2. pop() - It removes the last element from the array

arr4.pop()
console.log(arr4)

// 1. What is difference between push() and unshift() in array
// 2. What is difference between pop() and shift() in array

// 3. unshift(ele1, ele2, ele3,....) - It adds the element to the beginning of an array

arr4.unshift("Python", 100)
console.log(arr4)

// 4. shift() - It removes the first element from an array

arr4.shift()
console.log(arr4);


// 5. splice(startIndex, deleteCount, ele1, ele2, ele3,....) - Add/Remove the element 
// from an array at specified index

// startIndex - The position where you want to add/delete the element
// deleteCount(0) - The number of element to be deleted from array
// ele1, ele2, ......(Optional) - The element that you want to add at the startIndex

let arr5 = ["java", "Python", "JS", "TS", 10, 20,30]
console.log(arr5);

arr5.splice(2, arr5.length)

console.log(arr5);

// 6. slice()






