const marioPest = document.mariopest

marioPest.addEventListener('submit', function(event){
    event.preventDefault()
    const goombas = marioPest.goombas.value
    const bobombs = marioPest.bobombs.value
    const cheepCheeps = marioPest.cheepcheeps.value
    const total = +goombas * 5 + +bobombs * 7 + +cheepCheeps * 11
    document.getElementById('totalbaddies').textContent = 'Total coins for your service is ' + total + ' coins'
    console.log(document.getElementById('totalbaddies').textContent)


})
    


console.log(document.getElementById('totalbaddies').textContent)
    