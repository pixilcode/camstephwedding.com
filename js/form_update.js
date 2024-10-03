async function getCsrfToken(csrf_input) {
	let response = await fetch("/api/csrf_token", {
		method: 'POST',
	})

	let csrf_token = await response.text()

	csrf_input.value = csrf_token
}

// update all the forms with their own CSRF token
const csrf_inputs = document.querySelectorAll('form input[name="dream.csrf"]')
csrf_inputs.forEach(getCsrfToken)
