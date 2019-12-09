// Put hand in hole
// Find the key, or
// Open the door
// They can't open the door unless they find the key first.
// They die if they put their hand in the hole.
let isPlaying = true
let haskey = false
const readline = require("readline-sync")
const name = readline.question("what is your name? ");
console.log(`Hello, ${name}`)
const options = ['Put hand in hole', 'find the key', 'open the door']


while(isPlaying === true){
const answer = readline.keyInSelect(options,"what do you choose to do")
        if(options[answer] === 'Put hand in hole'){
            console.log('you are dead')
            isPlaying = false
        }else if( options[answer] === 'find the key'){
            haskey = true
            console.log("you found the key")
        }else{
            if(haskey === false){
                console.log("Door is locked...")
            }else{
                isPlaying = false
                console.log("you have left the building")
            }
        
        }

}
// let isPlaying = true
// let hasKey = false
// const readLine = require('readline-sync')
// const name = readLine.question('what is your name? ');
// console.log(`hello, ${name}`)
// const options = ['put hand in hole', 'find the key', 'open the door']


// while(isPlaying === true){
// const answer = readLine.keyInSelect(options, 'what do you want to do? ')
//         if(options[answer] === 'put hand in hole'){
//             console.log("you are dead")
//             isPlaying = false
//            }else if(options[answer] === 'find the key'){
//             hasKey = true
//             console.log("you have found the key!")
//             }else{
//                 if(hasKey === false){
//                         console.log("door is locked")
//             }else{ 
//                 isPlaying = false
//                 console.log('you have left the building')

//             }
            
//         }
//     }