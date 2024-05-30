document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        resetErrorMessages()
        let email = document.getElementById("email").value.trim()
        let password = document.getElementById("password").value.trim()
        let isValid = true

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Ingresar un correo electrónico válido")
            isValid = false

        }
        if (password.length < 6){
            displayErrorMessage("passwordError", "Ingresar una contraseña valida de al menos 6 caracteres")
            isValid = false
        }
        if (isValid) {
            alert("¡Usuario ingresado correctamente!")
        }
    })
})
function resetErrorMessages(){
    let errorElements = document.querySelectorAll(".error-message")
    errorElements.forEach((element)=> {
        element.innerText = ""
    })
}
function displayErrorMessage(elementId, message){
    let errorElement = document.getElementById(elementId)
    errorElement.innerText = message
}
function isValidEmail(email){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
}
