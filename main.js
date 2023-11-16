// cambiar el estilo de la barra de navegación al desplazar.
window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
});

// faq preguntas fecuentes, muestre la respuesta al hacer click
/*
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
        
        // cambia icono
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else{
            icon.className = 'uil uil-minus'
        }
    })
});
*/
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    // Inicializa el icono con la clase 'uil uil-plus'
    const icon = faq.querySelector('.faq_icon i');
    icon.className = 'uil uil-plus';

    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // Cambia el icono
        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    });
});

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})
//close nav menu
const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener("click",closeNav);