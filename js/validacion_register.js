document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("registerForm")
    form.addEventListener("submit", (event)=>{
        event.preventDefault()
        resetErrorMessages()
        let nombre = document.getElementById("nombre").value.trim()
        let apellido = document.getElementById("apellido").value.trim()
        let celular = document.getElementById("celular").value.trim()
        let email = document.getElementById("email").value.trim()
        let password = document.getElementById("password").value.trim()
        let fechadeNacimiento = document.getElementById("fechadeNacimiento").value
        let isValid = true

        if (!isValidNombre(nombre)){
            displayErrorMessage("nombreError", "Ingresar nombre")
            isValid = false

        }
        if (!isValidApellido(apellido)){
            displayErrorMessage("apellidoError", "Ingresar apellido completo")
            isValid = false
        }
        if (celular.length < 9){
            displayErrorMessage("celularError", "Ingresar un número válido")
            isValid = false
        }
        if (!isValidEmail(email)){
            displayErrorMessage("emailError", "Ingresar un email válido")
            isValid = false

        }
        if (password.length < 8){
            displayErrorMessage("passwordError", "Ingresar una contraseña valida de al menos 8 caracteres")
            isValid = false
        }
        if (!isValidfechadeNacimiento(fechadeNacimiento)){
            displayErrorMessage("fechaError", "Ingresar una fecha valida")
            isValid = false
        }
        if (!isValidPais(pais)){
            displayErrorMessage("paisError", "Ingresar pais")
            isValid = false
        }
        if (isValid) {
            alert("¡Usuario registrado correctamente!")
        }
    })
})
function resetErrorMessages(){
    let errorElements = document.querySelectorAll(".error-messager")
    errorElements.forEach((element)=> {
        element.innerText = ""
    })
}
function displayErrorMessage(elementId, message){
    let errorElement = document.getElementById(elementId)
    errorElement.innerText = message
}
function isValidNombre(nombre){
    let nombrePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    return nombrePattern.test(nombre)
}
function isValidApellido(apellido){
    let apellidoPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
    return apellidoPattern.test(apellido)
}
function isValidEmail(email){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
}
function isValidfechadeNacimiento(fechadeNacimiento) {
    let fechadeNacimientoPattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return fechadeNacimientoPattern.test(fechadeNacimiento)
}
