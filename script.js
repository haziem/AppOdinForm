'use strict'

//variables
const password = document.querySelector('#password')
const password2 = document.querySelector('#doublepassword')
const reenter = document.querySelector('label span')
const submitForm = document.querySelector('#form')

//functions
function passwordCheck() {
	console.log(password.value)
	reenter.textContent = ''

	if (password.value != password2.value) {
		console.log('Nie pasujom')
		password2.style = 'background-color: #ffcccb'
	} else {
		password2.style = 'background-color: #d6f29d'
	}
}

function finalCheck(e) {
	if (password.value != password2.value) {
		reenter.textContent = ` passwords do not match`
		e.preventDefault()
		return
	} else {
		return
	}
}

//main

password2.addEventListener('input', passwordCheck)

submitForm.addEventListener('submit', finalCheck)

// reenter.innerText="kupa"
