let loginBtn = document.querySelector('.login-btn');
let dropLogin = document.querySelector('.drop-login');

loginBtn.onclick = () => {
    dropLogin.classList.toggle('drop-login-open')
};

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
    
}
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu")
    dropLogin.classList.remove('drop-login-open')
}
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow',window.scrollY > 0)
})

const accordionItems = document.querySelectorAll('accordion-item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header') ;

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if(openItem && openItem !== item){
            toggleItem(openItem);
        }
    })
})

const toggleItem =  (item) => {
    const accordionContent = item.querySelector('.accordion-content');

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}


