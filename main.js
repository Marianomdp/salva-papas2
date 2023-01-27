let nombre = prompt("ingresa tu Nombre");
let saludo = (`Bienvenido ${nombre}`);
alert(saludo);

let edad;
while (isNaN(edad)) {
    edad = parseInt(prompt("Ingresa tu edad"));
    if (isNaN(edad)) {
        alert("El dato ingresado no es válido. Por favor ingresa solo números.");
    }
}

if (edad >= 18) {
     alert("Puedes ingresar al sitio");
}else {
     alert("Lo siento, debes tener al menos 18 años para acceder a este sitio.");
     window.location.href = "http://httpbin.org/status/500";
}

alert("Demuestra que no eres un robot.");
alert("realiza una operacion matematica.");

let NumeroUno = parseInt(prompt("Ingresa el primer número"));
let NumeroDos = parseInt(prompt("Ingresa el segundo número"));
let operacion = prompt("Ingresa la operación a realizar (+,-,*,/)");

function calculadora (NumeroUno, NumeroDos, operacion) {
    switch (operacion) {
        case "+":
            return NumeroUno + NumeroDos;
            break;
        case "-":
            return NumeroUno - NumeroDos;
            break;
        case "*":   
            return NumeroUno * NumeroDos;
            break;
        case "/":
            return NumeroUno / NumeroDos;
            break;
        default:
            return 0;
            break;
}}

alert(`El resultado de la operación es ${calculadora(NumeroUno, NumeroDos, operacion)}`);

    
