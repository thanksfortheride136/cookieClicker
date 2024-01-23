const btn = document.querySelector('#start-button');

if(btn){
    btn.addEventListener("click", nextScreen);
}

function nextScreen(){
    window.location.href = 'gameScreen.html';
}



