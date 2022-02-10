let atc = document.querySelectorAll('.linkModal');
let modalAtc = document.querySelectorAll('.modalAtc');
let modalRfc = document.querySelectorAll('.modalRfc');
let alert = document.querySelectorAll('.alert');
let alertR = document.querySelectorAll('.alertR');
let disable = document.querySelector('#disable');
let cart = document.querySelector('.cart');

// Item name IDs
let prod1 = document.querySelector('#prod1').innerHTML;
let prod2 = document.querySelector('#prod2').innerHTML;
let prod3 = document.querySelector('#prod3').innerHTML;
let prod4 = document.querySelector('#prod4').innerHTML;
let prod5 = document.querySelector('#prod5').innerHTML;

// Item price IDs
let p1 = document.querySelector('#p1').innerHTML;
let p2 = document.querySelector('#p2').innerHTML;
let p3 = document.querySelector('#p3').innerHTML;
let p4 = document.querySelector('#p4').innerHTML;
let p5 = document.querySelector('#p5').innerHTML;

let disProd1 = document.querySelector('#disProd1')
let disP1 = document.querySelector('#disP1')

// Cart related button effect function
let btnSwap = (id) =>{
    if(modalAtc[id].className == 'modalAtc'){
        modalAtc[id].classList.replace('modalAtc','modalRfc');
        modalAtc[id].innerHTML = 'Remove from Cart';

        atc[id].classList.replace('linkModal','linkModalR');
        atc[id].innerHTML = 'Remove from Cart';
    }else{
        modalAtc[id].classList.replace('modalRfc','modalAtc');
        modalAtc[id].innerHTML = 'Add to Cart';

        atc[id].classList.replace('linkModalR','linkModal');
        atc[id].innerHTML = 'Add to Cart';
        localStorage.removeItem('prod1')
    }
}
// Green/Red notifcation alert function
let alertSwap = (id) => {
    if(modalAtc[id].className == 'modalAtc'){
        alertR[id].style.display = 'block';
        alertR[id].style.animation ='alertMsg 1.5s forwards alternate-reverse ease-out';
        alert[id].style.display = 'none';
    }else{
        alert[id].style.display = 'block';
        alert[id].style.animation ='alertMsg 1.5s forwards alternate-reverse ease-out';
        alertR[id].style.display = 'none';
    }
}
cart.addEventListener('click',(e)=>{
    disProd1.innerHTML = localStorage.getItem('prod1')
    disP1.innerHTML = localStorage.getItem('p1')
})

// Individual button elements
atc[0].addEventListener('click', (e)=>{
    e.preventDefault();
    if(localStorage.getItem('prod1')){
        localStorage.removeItem('prod1')
        localStorage.removeItem('p1',p1)
    }else{
        localStorage.setItem('prod1',prod1);
        localStorage.setItem('p1',p1)
    }
    let id = 0;
    btnSwap(id);
    alertSwap(id);
})
atc[1].addEventListener('click', (e)=>{
    e.preventDefault();
    if(localStorage.getItem('prod2')){
        localStorage.removeItem('prod2')
        localStorage.removeItem('p2',p2)
    }else{
        localStorage.setItem('prod2',prod2);
        localStorage.setItem('p2',p2)
    }
    let id = 1;
    btnSwap(id);
    alertSwap(id);
})
atc[2].addEventListener('click', (e)=>{
    e.preventDefault();
    if(localStorage.getItem('prod3')){
        localStorage.removeItem('prod3')
        localStorage.removeItem('p3',p3)
    }else{
        localStorage.setItem('prod3',prod3);
        localStorage.setItem('p3',p3)
    }
    let id = 2;
    btnSwap(id);
    alertSwap(id);
})
atc[3].addEventListener('click', (e)=>{
    e.preventDefault();
    if(localStorage.getItem('prod4')){
        localStorage.removeItem('prod4')
        localStorage.removeItem('p4',p4)
    }else{
        localStorage.setItem('prod4',prod4);
        localStorage.setItem('p4',p4)
    }
    let id = 3;
    btnSwap(id);
    alertSwap(id);
})
atc[4].addEventListener('click', (e)=>{
    e.preventDefault();
    if(localStorage.getItem('prod5')){
        localStorage.removeItem('prod5')
        localStorage.removeItem('p5',p5)
    }else{
        localStorage.setItem('prod5',prod5);
        localStorage.setItem('p5',p5)
    }
    let id = 4;
    btnSwap(id);
    alertSwap(id);
})
// Individual modal button elements
modalAtc[0].addEventListener('click', (e)=>{
    let id = 0;
    btnSwap(id);
    alertSwap(id);
})
modalAtc[1].addEventListener('click', (e)=>{
    let id = 1;
    btnSwap(id);
    alertSwap(id);
})
modalAtc[2].addEventListener('click', (e)=>{
    let id = 2;
    btnSwap(id);
    alertSwap(id);
})
modalAtc[3].addEventListener('click', (e)=>{
    let id = 3;
    btnSwap(id);
    alertSwap(id);
})
modalAtc[4].addEventListener('click', (e)=>{
    let id = 4;
    btnSwap(id);
    alertSwap(id);
})
// Sold out button effect
disable.addEventListener('click',(e)=>{
    e.preventDefault();
})