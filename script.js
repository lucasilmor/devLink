let elemento = document.querySelector('.switch');

elemento.addEventListener('click', claro);


function claro(){
    const body = document.querySelector('body')
    body.classList.toggle('light')


    let img = document.querySelector(".profile img")

    if(body.classList.contains('light')){
        img.setAttribute('src', 'assets/avatar-light.png')
    }else{
        img.setAttribute("src", "assets/avatar.jpg")
    }

};

