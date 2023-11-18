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

/*
//test js
const form = document.getElementById('language-proficiency-test');
const resultDiv = document.getElementById('result');
let general_cont = 0;
let business_cont = 0;
let personal_cont = 0;

form.addEventListener('submit', function (event) {
	event.preventDefault();
	const q1 = document.querySelector('input[name="q1"]:checked').value;
	const q2 = document.querySelector('input[name="q2"]:checked').value;
	const q3 = document.querySelector('input[name="q3"]:checked').value;
	const q4 = document.querySelector('input[name="q4"]:checked').value;
	const q5 = document.querySelector('input[name="q5"]:checked').value;
	const q6 = document.querySelector('input[name="q6"]:checked').value;

	// Calculate the language preference based on the user's answers
	// Replace this code with your own logic to calculate the language preference
	let result;

	if (q1 === 'general') {
		general_cont++;
	} else if (q1 === 'business') {
		business_cont++;
	} else if (q1 === 'personal') {
		personal_cont++;
	}

	if (q2 === 'general') {
		general_cont++;
	} else if (q2 === 'business') {
		business_cont++;
	} else if (q2 === 'personal') {
		personal_cont++;
	}

	if (q3 === 'general') {
		general_cont++;
	} else if (q3 === 'business') {
		business_cont++;
	} else if (q3 === 'personal') {
		personal_cont++;
	}

	if (q4 === 'general') {
		general_cont++;
	} else if (q4 === 'business') {
		business_cont++;
	} else if (q4 === 'personal') {
		personal_cont++;
	}

	if (q5 === 'general') {
		general_cont++;
	} else if (q5 === 'business') {
		business_cont++;
	} else if (q5 === 'personal') {
		personal_cont++;
	}

	if (q6 === 'general') {
		general_cont++;
	} else if (q6 === 'business') {
		business_cont++;
	} else if (q6 === 'personal') {
		personal_cont++;
	}

	const general = general_cont;
	const business = business_cont;
	const personal = personal_cont;

	const url = `result.html?general=${general}&business=${business}&personal=${personal}`;
    
	window.location.href = url;
});*/
