//PRIMER EJERCICIO
const sumar (numero1, numero2) => {
    return (numero1) + (numero2)
}

let suma = sumar (2, 3)
alert (suma)

//SEXTO EJERCICIO
let frase = prompt ("Escribe aquí una frase")

let gritar= (comienza,termina) => {
return alert (comienza + (frase) + termina) 
}

gritar ("¡","!")
let gritando = gritar

//SEPTIMO EJERCICIO
let nombre = prompt ("Escribe aquí su nombre")
let apellido = prompt ("Escriba aquí su apellido")

let obtenerLosNombresCompletos= (nombrecito, apellidito) => {
return alert (nombre + " " + apellido)
}

obtenerLosNombresCompletos (nombre), (apellido)
let nombres = (nombre + apellido)

//OCTAVO EJERCICIO
alert ("Hola"+ " "+ (nombres) + " " + "me gusta tu nombre")

//NOVENO EJERCICIO

alert ((gritando) +"hola" + " "+ (nombres)+ "me gusta tu nombre"+ (gritando))