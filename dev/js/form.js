// const form = document.getElementById('form');
// const inputs = document.querySelectorAll('#form input');

// const expressions = {
// 	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
// 	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	tel: /^\d{7,14}$/
// };

// const fields = {
// 	name: false,
// 	email: false,
// 	tel: false,
// }

// const validateForm = (e) => {
// 	switch (e.target.name) {
// 		case "name":
// 			validateField(expressions.name, e.target, 'name');
// 			break;
// 		case "email":
// 			validateField(expressions.email, e.target, 'email');
// 			break;
// 		case "tel":
// 			validateField(expressions.tel, e.target, 'tel');
// 			break;
// 	}
// }

// const validateField = (expression, input, field) => {
// 	if (expression.test(input.value)) {
// 		document.getElementById(`group_${field}`).classList.remove('form_group_fail');
// 		document.getElementById(`group_${field}`).classList.add('form_group_ok');
// 		document.querySelector(`#group_${field} i`).classList.remove('fa-times-circle');
// 		document.querySelector(`#group_${field} i`).classList.add('fa-check-circle');
// 		document.querySelector(`#group_${field} .form_fail`).classList.remove('form_fail-active');
// 		fields[field] = true;
// 	} else {
// 		document.getElementById(`group_${field}`).classList.add('form_group_fail');
// 		document.getElementById(`group_${field}`).classList.remove('form_group_ok');
// 		document.querySelector(`#group_${field} i`).classList.add('fa-times-circle');
// 		document.querySelector(`#group_${field} i`).classList.remove('fa-check-circle');
// 		document.querySelector(`#group_${field} .form_fail`).classList.add('form_fail-active');
// 		fields[field] = false;
// 	}
// }

// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validateForm);
// 	input.addEventListener('blur', validateForm);
// });

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const terms = document.getElementById('term');
// 	if (fields.name && fields.email && fields.tel && terms.checked) {
// 		form.reset();
// 		document.getElementById('form_message_ok').classList.add('form_message_ok-active');
// 		setTimeout(() => {
// 			document.getElementById('form_message_ok').classList.remove('form_message_ok-active');
// 		}, 5000);
// 		document.querySelectorAll('.form_group_ok').forEach((icon) => {
// 			icon.classList.remove('form_group_ok');
// 		});
// 	} else {
// 		document.getElementById('form_message').classList.add('form_message-active');
// 		setTimeout(() => {
// 			document.getElementById('form_message').classList.remove('form_message-active');
// 		}, 5000);
// 	}
// });