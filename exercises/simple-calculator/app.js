const addForm = document.addition

addForm.addEventListener('submit', function(){
    event.preventDefault()
    const add1 = addForm.add1.value
    const add2 = addForm.add2.value
    const addTotal = Number(add1) + Number(add2)
    document.getElementById('htmlAdd').textContent = "This is your answer:" + addTotal
}) 

const subForm = document.subtraction

subForm.addEventListener('submit', function(){
    event.preventDefault()
    const sub1 = subForm.sub1.value
    const sub2 = subForm.sub2.value
    const subTotal = Number(sub1) - Number(sub2)
    document.getElementById('htmlSub').textContent = "This is your answer:" + subTotal
})
const mulForm = document.multiply

mulForm.addEventListener('submit', function(){
    event.preventDefault()
    const mul1 = mulForm.mul1.value
    const mul2 = mulForm.mul2.value
    const mulTotal = Number(mul1) * Number(mul2)
    document.getElementById('htmlMul').textContent = "This is your answer:" + mulTotal
    

})
