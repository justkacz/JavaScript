// Braces have two meanings in JavaScript. At the start of a statement, 
// they start a block of statements. In any other position, they describe an object.

// The binary "in" operator, when applied to a string and an object, tells you whether that object has a property with that name.
let objTest = {left:1, right:2}
console.log('left' in objTest);

delete objTest.right;
console.log('right' in objTest);

// The difference between setting a property to undefined and actually 
// deleting it is that, in the first case, the object still has the property 
// (it just doesn’t have a very interesting value), whereas in the second case the property is no longer present and in will return false.

// ************************************************************************
//  add item at the end of the list = push
//  remove the last item (as a result is removed value) = pop:
let myList=[]
function addItem(item){
    myList.push(item);
}

function removeItem(item){
    myList.pop(item)
}

// add item at the beginning of the list = shift
// remove item from the beggining of the list = unshift

//function - takes an array and an index, and it returns a new array 
//that is a copy of the original array with the element at the given index removed.
function myArray(array, indexNo){
    let newArray=array.slice(0, indexNo).concat(array.slice(indexNo+1));
    return newArray;
}
console.log(myArray([1,2,3,4,5,6,7], 3));

//Values of type string, number, and Boolean are not objects, and though the language doesn’t 
//complain if you try to set new properties on them, 
//it doesn’t actually store those properties; such values are immutable and cannot be changed.

// JSON.stringify = converts to JSON format
// JSON.parse = converts from JSON format

// iterates over array:
//  for(let element of array){}

// *************************************************************************
// EXERCISES:

// 1) function that takes two arguments, start and end, and returns an array 
// containing all the numbers from start up to (and including) end:
function zakres(start, end, step=start<end?1:-1){
    let array=[];
    if (step>0){
        for (let i=start; i<=end; i+=step) array.push(i);
    } else {
        for (let i=start; i>=end; i+=step) array.push(i);
    }
    return array;
}
console.log(zakres(21,13));

// 2) Next, write a sum function that takes an array of numbers and returns the sum of these numbers.

function suma(array) {
    let suma=0;
    for (let element of array){
        suma+=element;
    } return suma;
}

console.log(suma(zakres(1,10)));

// 3) Function reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(array){
    let newA=[];
    for (let i=array.length-1; i>=0; i--) {
        newA.push(array[i]);
    }
    return newA;
}
console.log(reverseArray(zakres(1,10)));

