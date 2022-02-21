function reduce(array, combine, start) {
    let current=start;
    for (let element of array){
        current=combine(current,element)
    } return current;
}

const sqrt = x => {
    return x * x;
};

// return statement without an expression = undefined
// function without a return statement = undefined

const noise = function() {
    console.log("Make Noise!");
};
//  or:
function Noise() {
    console.log("Make Noise!");
} /* does not require semicolon at the end of the statement */

// ***********************************************************************
// 'let' and 'const' declarations are in fact local to the block that they are declared in
//  any variable declared out of the code block is available:
// ***********************************************************************
let x=10;
if (true) {
    let y=20;
    var z =30;
    console.log(x+y+z);
} 
// console.log(x+y+z); ERROR -> y is not available, only declared as 'var' would be available

// *********************************************************************************
// Each local scope can also see all the local scopes that contain it, 
// and all scopes can see the global scope. 
// BUT: the local bindings are not visible in the outer function.
Noise();
noise();
console.log(sqrt(12));
console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 2));

// *********************************************************************************
// Arrow function (without 'function' keyword):
const power = (base, exponent) => {
    let result=1;
    for (let i=0; i<exponent; i++) {
        result*=base;
    }
    return result;
};

// with only one parameter the parentheses might be omitted:
const sqrt1 = (x)=> { return x * x}; /* without return = undefined*/
const sqrt2 = x => x * x; /* return might be omitted*/

console.log(power(5,3));
console.log(sqrt1(5));

// the extra arguments are omitted and function executes:
console.log(sqrt1(5, false, 'dog'));
//if you pass too few, the missing parameters get assigned the value undefined

// ***********************************************************************
// CLOSURE - A function that references bindings from local scopes around it
function multiplier(factor) {
    return number => number * factor; /*another function 'number' */ 
}

let test = multiplier(3); /*multiplier is called with the factor parameter=3
it creates an environment, so when it is called it remembers the environment where it was
created not called:  */
console.log(test(2)); 

//  add 0 in front of the number if its length after converting to String is less than 3
function farm(chicken, cow) {
    let cowString =String(cow);
    while (cowString.length<3)
    {
        cowString= "0" + cowString;
    }
    let chickenString=String(chicken);
    while (chickenString.length<3) 
    {
        chickenString= "0" + chickenString;
    }
    console.log(`${chickenString} chickens and ${cowString} cows`);
}
farm(5,10);

// shorter way:
function farmall(...x) {
    x.forEach((n, i) =>{
        let xStr = String(n);
        while (xStr.length<3) {
            xStr="0" +xStr;
        } 
        console.log(`${xStr} number with zeros`);})
}
farmall(3,5,7);

// ************************************************************************
// Exercises:
// 1) function min that takes two arguments and returns their minimum:
function min(a,b) {
    if (a<b){
        console.log(a);
    }
    else {
        console.log(b);
    }
}
let min2=(a,b)=>(a<b?a:b);

min(4,-10)
console.log(min2(-3, 5));

// 2) Define a recursive function isEven:
let isEven = x =>(x%2==0?'True':'False');
console.log(isEven(0));

function isEven2(x){
    if (x==0) return 'True';
    else if (x==1) return 'False';
    else return isEven2(x-2);}

console.log(isEven2(43));

// 3) function that takes a string as its only argument and returns 
// a number that indicates how many uppercase “B” characters there are in the string.
function countBs(x){
    // x=String(x);
    let count=0;
    // for (let i=0; i<x.length; i++){
        // if(x[i]==='B') count+=1
    // } return count
    x.forEach((n,i)=>{n==='B'?count+=1:count});
    return count
}

console.log(countBs('abcBdBrrr'));