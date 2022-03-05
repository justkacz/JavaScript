// Methods:
let rabbit={};
rabbit.speak=word=>console.log(`The rabbit says: "${word}"`);

rabbit.speak("I am jumping!");

// **********************************************************************************
function speak(x){
    console.log(`The ${this.type} rabbit says: "${x}"`);
}
let whiteRabbit={type:'white', speak}
console.log(whiteRabbit.speak('I am jumping!'));


// function’s call method, which takes the this value as its first argument and treats further arguments as normal parameters.
speak.call(whiteRabbit, 'I am white!' )


// Object.getPrototypeOf - returns the prototype of an object
// A prototype is another object that is used as a fallback source of properties.
// The prototype forms a tree-shaped structure, and at the root of this structure sits Object.prototype 
// It provides a few methods that show up in all objects - e.g.toString, many objects don't directly have objectPrototype but instead have another object that provides a different set of properties:
// Functions -> derive from Function.prototype, arrays -> derive from Array.prototype
//  When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.
// who is the prototype of that empty object? - the entity behind almost all objects = Object.prototype
console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf(Math.max)==Function.prototype);


// ********************************************CLASSES:
// constructor - function is treated as a constructor when the keyword NEW is put in front of the function call

// CONSTRUCTOR = FUNCTION:
function Rabbit(type) {
    this.type=type;
}
// PROTOTYPE OBJECT - is found by taking the PROTOTYPE property of the constructor function (above Rabbit):
Rabbit.prototype.speak=function(word) {
    console.log(`The ${this.type} rabbit says: ${word}!`);
}
// NEW OBJECT:
let Krolik = new Rabbit("szybki");
Krolik.speak("I am fast!");

// CLASS DECLARATION:
// - constructor + a set of methods (any number of methods)
// - constructor is treated specially -It provides the actual constructor function, which will be bound to the name Rabbit. The others are packaged into that constructor’s prototype

class Rabit {
    constructor(type) {
        this.type=type;
    }
    speak(word){
        console.log(`The ${this.type} rabbit says: ${word}`);
    }
}

//  overriding properties existing in a prototype:
Rabbit.prototype.teeth='small'; //new property added to the Rabbit class
console.log(Krolik.teeth); //=small

Krolik.teeth='long, sharp' //teeth property is overwritten in Krolik object
console.log(Krolik.teeth); //=long, sharp

let Krolik2=new Rabbit("big") // new object Krolik2 takes a standard value of the teeth property
console.log(Krolik2.teeth);  // = small

// CLASS MAP() - allows to combine the key and its value;
// set - assigns key & value, get - reads value, has - checks key & value:
let ages = new Map();
ages.set('Ann', 34);
ages.set('Simon', 20);

console.log(`Simon is ${ages.get('Simon')} years old`);


//  ITERATOR:
//  - has a next method which returns the next result
//  - result = object with a value property that provides the next value
