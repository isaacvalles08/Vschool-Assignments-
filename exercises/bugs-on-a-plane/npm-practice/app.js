const readlineSync = require('readline-sync')

const firstNum = Number(readlineSync.question('What is your first number?'))
const secNum = Number(readlineSync.question("what is your second number?"))
const operations = ['add', 'subtract', 'divide', 'multiply']
const operation = readlineSync.keyInSelect(operations, "what operation do you peform?")
       if(operations[operation] === 'add'){
            let totalAdd = firstNum + secNum
            console.log(totalAdd)
        }else if(operations[operation] === 'subtract'){
            let totalSub = firstNum - secNum
            console.log(totalSub)
        } else if(operations[operation] === 'divide'){
            let totalDivide = firstNum / secNum
            console.log(totalDivide)
        }else{
            console.log(firstNum * secNum)
        }
        
        
        
            

