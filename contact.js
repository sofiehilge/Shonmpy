const form = document.querySelector(".contact-form")

form.addEventListener("submit", submitHandler)

function submitHandler(event) {
	event.preventDefault()

	for(let i = 0; i < event.target.length; i++) {
		if (event.target[i].type === "submit") {
			return
		}

		event.target[i].parentNode.nextElementSibling.innerText = ""

		if (event.target[i].type === "text") {
			if (event.target[i].value.length === 0) {
				event.target[i].parentNode.nextElementSibling.innerText = "Feltet skal udfyldes, tak!"
			}
		}

	}
}