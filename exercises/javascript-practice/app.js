const favorite = document.querySelectorAll('ol#favorite >li')
for(let i = 0; i < favorite.length; i++){
    favorite[i].textContent = 'sensitive information'
}
