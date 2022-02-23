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

// Object.getPrototypeOf - returns the prototype of an object
// A prototype is another object that is used as a fallback source of properties. 
// When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on.