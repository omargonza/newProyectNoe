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
});

