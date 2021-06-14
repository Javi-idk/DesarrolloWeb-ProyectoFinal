const nombre = document.getElementById("name")
const motivo = document.getElementById("motivo")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let enviar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es válido <br>`
        enviar = true
    }
    if(motivo.value.length <8){
        warnings += `El motivo no es válido <br>`
        enviar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        enviar = true
    }
    if(mensaje.value.length < 20){
        warnings += `Ingresa un mensaje más largo <br>`
        enviar = true
    }

    if(enviar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Hemos recibido tu mensaje!"
        document.getElementById("name").value = "";
        document.getElementById("motivo").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensaje").value = "";
    }
})