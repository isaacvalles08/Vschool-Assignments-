const ask = require('readline-sync')
let isAlive = true;
let hasWon = false;
function Enemy (name, healthPoints, attackPoints){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
}


const countDuku = new Enemy('Count Duku', 1000, 50)
const darthSidious = new Enemy('Darth Sidious', 1000, 75)
const darthMaul = new Enemy('Darth Maul', 1000, 75)
const darkEnemies = [countDuku, darthMaul, darthSidious]




function Jedi(name, healthPoints, attackPoints){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
}
const luke = new Jedi('Luke', 500, 100)
console.log('Hello how are you? welcome to Star Wars')
const name = ask.question('What is your name? ')
console.log(`Welcome to the game ${name}, Your journey is about to begin`)




while(isAlive && !hasWon){
    let choice = ask.keyIn('Would you like to (w) Walk, (i) Check Inventory, or (q) Leave Game? ', {limit: 'wiq'} )
    if(choice === 'w'){
        walk()
    }else if (choice === 'i'){
       printInventory()
    }else {
        isAlive = false
        console.log('You quit the game')
    }
}





function walk (){
    let random = Math.floor(Math.random()*4)
    if(random === 3){
        enemyEncounter()
    }else{
        console.log('You continue walking safely')
    }
}
function enemyEncounter(){
    const currEnemy = selectEnemy()
    let choice = ask.keyIn(`You encountered ${currEnemy.name}! Would you like to [a] Attack, [r] Run, or [q] Quit`, {limit: 'arq'})
    if(choice === 'a'){
        fight()
    }else if (choice === 'r'){
        run()
    }else{
        isAlive = false
        console.log('You are a Quiter')
    }
}
function selectEnemy(){
    let random = Math.floor(Math.random()*darkEnemies.length)
    return darkEnemies[random]
}

function run(){
    const runAway = Math.floor(Math.random() * 3)
    if(runAway === 2){
    console.log('You got away')
        } else {
            fight()

 } 
function enemyttack(){
    
}

}
