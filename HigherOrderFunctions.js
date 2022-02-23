// Higher-order functions - functions that operate on another functions
// map () - transforms an array by putting each element through a function
// map() vs forEach - map creates NEW ARRAY, forEach iterates through existing array, 
// map() - allocates memory and stores return values. forEach() throws away return values and always returns undefined
// filter() - method returns a NEW ARRAY containing only the elements that pass the predicate function
// reduce() - combines all the elements in an array into a single value.


function repeat(x, action){
    for (let i=0; i<x;i++){
        action(i);
    }
}

repeat(4, console.log)

function reduce(array, combine, start){
    let current=start;
    for (let element of array){
        current=combine(current, element);
    }
    return current;   
}
console.log(reduce([1,2,3,4], (a,b)=>a+b, 0));

function average(array){
    return array.reduce((a,b)=>a+b)/array.length; /*built in 'reduce' */
}

console.log(average([1,2,3,4]));

function average2(array){
    return reduce(array,(a,b)=>a+b, 0)/array.length;
}

console.log(average2([1,2,3,4]));

//Array.prototype.indexOf() expects a value as first parameter, a good choice to find the index in arrays of primitive types (like string, number, or boolean).

// Array.prototype.findIndex() expects a callback as first parameter. Use this if you need the index in arrays with non-primitive types (e.g. objects) or your find condition is more complex than just a value. 

// EXERCISE:
// 1) Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
function flatten(arrays){
    return arrays.reduce((a,b)=>a.concat(b));
}
console.log(flatten([[1, 2, 3], [4, 5], [6]]));

// 2) Write a higher-order function loop that provides something like a for loop statement. 
// It takes a value, a test function, an update function, and a body function.

function loop(value, testfunc, testtrue, action){
    while (testfunc(value)){
        action(value);
        value=testtrue(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

// 3) Implement every as a function that takes an array and a predicate function as parameters. 
// Write two versions, one using a loop and one using the some method.
function every1(array, test){
    for (i=0; i<array.length; i++){
        if(!test(array[i])) return false
    } return true
}

console.log(every1([1, 3, 5], n => n < 10));

