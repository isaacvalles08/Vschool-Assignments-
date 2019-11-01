const travelForm = document.travelInfo

travelForm.addEventListener('submit', function(event){
        event.preventDefault()
        const first = travelForm.firstName.value
        const last = travelForm.lastName.value
        const howOld = travelForm.age.value
        const gender = travelForm.gender.value
        const travelLocation = travelForm.location.value
        const food = travelForm.food
        const foodArr = []
        for(let i = 0; i < food.length; i ++){
            if(food[i].checked){
                foodArr.push(food[i].value)
            }
        }
        
        alert(`first name:${first}
        last name:${last} 
        age:${howOld} 
        gender: ${gender} 
        Location:${travelLocation} 
        Food Issue:${foodArr}`)
})
