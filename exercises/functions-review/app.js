// methods vs functions
// // expression will not hoist
// const functionName = function(){

// }

// //decleration will run anytime in the code
// function funcName(){
//     console.log('expression called')
// }

// // arrow functions

// const speak = (phrase1, phrase2) => phrase1 + ' ' + phrase2 code block ; // if on one line return occurs automatically

// const oneParam = param => param = 'is my parameter'; // if you only have one parameter, no parenthesis are required

// const multiLines = (num1) => {    // if you are writing multiple lines in your code block, then return is required
//     if( _____)
//     return{
                
// Bare Bones of Function
// function toaster (slot1, slot2) {
//     return slot1 + ' ' + slot2
// }
// let toasterStr = toaster('bread', 'waffles')
// console.log(toasterStr)
// Methods vs Functions
// Method is a function within an object
// toaster(arguments)
// const myObj = {
//     name: 'John',
//     toast: function(slot1){
//         console.log('toasted ' + slot1)
//     }
// }
// myObj.toast('english muffin')
// Arguments vs Parameters
// Returns and console.logs
// Calling a Function
// Expression vs Declaration (hoisting)
// funcName() ---> will run anywhere in code (hoists)
//functionName() ---> has to be run after it was written (does not hoist)
// expression
const functionName = function(){
    console.log('expression called')
}
// declaration
function funcName (){
    console.log('declaration called')
}
// Fat Arrow Functions
const speak = (phrase1, phrase2) => phrase1 + ' ' + phrase2 // if on one line, return occurs automatically
const oneParam = param => param + ' is my parameter' // if you only have one parameter, no parenthesis are required
const multLines = (num1) => {
   if(num1 > 10){
       return 'it is a big one'
   }else if (num1 === 10){
       return 'it is ten'
   }else {
       return 'it is little'
   }
} 
console.log(speak('hi', 'buddy'))
console.log(oneParam('rectangle'))
console.log(multLines(12))
// if you are writing multiple lines in your code block, use curly brace, return is required
Collapse







