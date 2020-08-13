//PRIMER EJERCICIO
const sumar = (numero1, numero2) => {
    return (numero1) + (numero2)
}

let suma = sumar (2, 3)
alert (suma)

//SEXTO EJERCICIO
let frase = prompt ("Escribe aquí una frase")

const gritar = (fraseDelUsuario) => {
return "¡" + (frase) + "!" 
}

let gritando = gritar (frase)
alert (gritando)

//SEPTIMO EJERCICIO
let nombre = prompt ("Escribe aquí su nombre")
let apellido = prompt ("Escriba aquí su apellido")

const obtenerLosNombresCompletos= () => {
return (nombre + " " + apellido)
}

let nombres = obtenerLosNombresCompletos (nombre, apellido)
alert (nombres)
//OCTAVO EJERCICIO

const paraSaludar= () => {
    return "Hola" + " " + (nombres) + " " + "¿Cómo estás?" 
}

let saludando = paraSaludar (nombres)
alert (saludando)

//NOVENO EJERCICIO

const saludarGritando = (gritar, saludar) => {
    return (gritando) + (saludando)
}

let saludoGriton = saludarGritando (gritando, saludando)
alert (saludoGriton)