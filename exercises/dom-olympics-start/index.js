

const   h1 = document.createElement("h1")
const   h2= document.createElement("h2")
h1.textContent = "JavaScript made this";
document.getElementById("header").appendChild(h1);
h1.className = "header"
h2.innerHTML = '<span class="name">Isaac</span> wrote the JavsScript'
document.getElementById('header').appendChild(h2)
h2.className = 'header'
const   messages = document.getElementsByClassName("message");
messages[0].textContent = "How are you";
messages[1].textContent = "Good Thanks!";
messages[2].textContent = "Your Welcome";
messages[3].textContent = "Have a Good Day";
const   clear = document.getElementById('clear-button')
        

    clear.addEventListener('click', function(){
    document.getElementsByClassName('messages')[0].innerHTML = " "
        // for(let i = 0; i < messages.length; i++){
        //     messages[i].textContent = ""
        // }

         })
    

