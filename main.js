
/*
window.onload = function() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };

    if (width < 720) {
        // Si el ancho de la ventana es menor a 768px, carga "small.html"
        xhttp.open("GET", "contact_mobile.html", true);
    } else {
        // Si el ancho de la ventana es mayor o igual a 768px, carga "large.html"
        xhttp.open("GET", "contact.html", true);
    }
    xhttp.send();
};

*/


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

document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el mensaje y el botón
    var mensajeRespuesta = document.getElementById('mensajeRespuesta');
    var btnEnviarMensaje = document.getElementById('btnEnviarMensaje');

    // Verifica si los elementos existen antes de usarlos
    if (!mensajeRespuesta || !btnEnviarMensaje) {
        console.error('No se encontraron algunos elementos.');
        return;
    }

    // Agrega un event listener para el clic en el botón
    btnEnviarMensaje.addEventListener('click', function () {
        try {
            // Muestra el mensaje de respuesta
            mensajeRespuesta.classList.remove('mensaje-oculto');

            // Puedes agregar más lógica aquí, como enviar el formulario, etc.
        } catch (error) {
            console.error('Error al mostrar el mensaje de respuesta:', error.message);
        }
    });
});

// Realiza la carga dinámica de contenido en un contenedor específico
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("content").innerHTML = this.responseText; // Cambiado a un contenedor específico
    }
};

if (width < 720) {
    // Si el ancho de la ventana es menor a 768px, carga "contact_mobile.html"
    xhttp.open("GET", "contact_mobile.html", true);
} else {
    // Si el ancho de la ventana es mayor o igual a 768px, carga "contact.html"
    xhttp.open("GET", "contact.html", true);
}

xhttp.send();
