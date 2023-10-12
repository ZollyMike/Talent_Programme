let open= document.querySelector('.l-head__list');
console.log(open);
open.querySelector('.c-menu').addEventListener('click',function (e){
    e.preventDefault();
    open.querySelector('.nav').classList.toggle('show-menu');
    
    let check = document.querySelector('.show-menu');
    let change = open.querySelector('.c-menu__bar');
    if(check){
        change.innerHTML= '<img src="../img/cross.png" alt="" class="c-menu__img">';
    }
    else{
        change.innerHTML= '<img src="../img/menu.png" alt="" class="c-menu__img">';
    }
})



