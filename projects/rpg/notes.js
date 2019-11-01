function walk (){
    let random = Math.floor(Math.random()*4)
    if(random === 3){
        enemyEncounter()
    }else{
        console.log('You continue walking safely')
    }

function fight(){
    
}

function attackEnemy(){
const enemyA = Math.floor(Math.random() * 3)
if(enemyA === 2){
    enemyAttack()
}else jediAttack()

}

function enemyAttack(){

}

function die(){
    
}

function enemyDie(){

}

function Enemy (name, healthPoints, attackPoints){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
}
const countDuku = new Enemy('Count Duku', 500, 50)
const darthSidious = new Enemy('Darth Sidious', 1000, 75)
const darthMaul = new Enemy('Darth Maul', 700, 75)
const darkEnemies = [countDuku, darthMaul, darthSidious]
function Jedi(name, healthPoints, attackPoints){
    this.name = name;
    this.healthPoints = healthPoints;
    this.attackPoints = attackPoints;
}
}
funcion jediAttack(){
    
}