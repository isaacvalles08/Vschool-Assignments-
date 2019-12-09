const ask = require('readline-sync')

let isAlive = true
let hasWon = false
let hasKey = false

function Enemy(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
    
const darthVader = new Enemy('Darth Vader', 100, 50)
const darthMaul = new Enemy('Darth Maul', 100, 50)
const darthSidious = new Enemy('Darth Sidious', 110, 75)
const enemyArr = [darthVader, darthMaul, darthSidious]
    


function Hero(name, hp, ap){
    this.name = name;
    this.hp = hp;
    this.ap = ap;
}
const hero = new Hero('Luke', 150, 75)

console.log(`Hello ${hero.name}, it is nice to meet you`)
while(isAlive && !hasWon && !hasKey){
    const action = ask.keyIn("Would you like to walk [w], check inventory [i], or quit[q]? ", {limit: 'wiq'})
    if(action === 'w'){
        walk()
    }else if(action === 'i'){
        checkInventory()
    }else if(action === 'q'){
        isAlive = false
        console.log('You have quit the game. The Dark side has won')
    }

}

function walk(){
    const random = Math.floor(Math.random() * 4)
    if(random === 3){
      const  enemy = enemyOccurs()
       action = ask.keyIn('Would you like to fight [f] use item [i] or run away? [r] ',{limit: 'fir'} )
        if(action === 'f'){
            fight(enemy)
        }else if(action === 'i'){
            useItem()
        }else if(action === 'r'){
            run()
        }
    }else{
        console.log('you continue walking safely')
    }
}

function enemyOccurs(){
    const randomIndex = Math.floor(Math.random() * enemyArr.length)
    const enemy = enemyArr[randomIndex]
    console.log(enemy)
    return enemy
}


function fight(enemy){
    heroAttack(enemy)
}

function checkInventory(){
    console.log(``)
}

function run(){
    const random = Math.floor(Math.random() * 4)
    if(random === 3){
        console.log('You got away safely')
    }else{
        enemyAttack()
    }
}

function heroAttack(enemy){
    const randomAttack = Math.floor(Math.random() + hero.ap)
    if(randomAttack > enemy.hp){
        const index = enemyArr.findIndex(function(badGuy){
            return badGuy.name === enemy.name
        })
        enemyArr.splice(index, 1)
    }
    console.log('You have killed a Sith')
    console.log('The sith dropped a key')
    
}

function enemyAttack(enemy){
    const randomAttack = Math.floor(Math.random() + enemy.ap)
    if(randomAttack > hero.hp){
        console.log('You have died.')
        isAlive = false
    }
}
