//PRIMER ENTREGA ///////////////////////////////////////////////////////////////

/*let nombre = prompt("ingresa tu Nombre");
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
*/

//SEGUNDA ENTREGA ///////////////////////////////////////////////////////////////

const nombres = ["corporativos", "ferias", "festivales", "masivos"];
const datosEnServicios = ["nombre", "categoria", "clase", "valor"];
const servicios = [
{nombre: "corporativos", categoria: "evento", clase: "A", valor : 10000},
{nombre: "ferias", categoria: "evento", clase: "A", valor : 8000},
{nombre: "festivales", categoria: "evento", clase: "A", valor : 12000},
{nombre: "masivos", categoria: "evento", clase: "A", valor : 100000},
 ];

let masEconomico = servicios.filter(evento => evento.valor <= 8000)

console.log(masEconomico);

const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    let opcion = "";
    while (!nombres.includes(opcion)) {
    opcion = prompt("¿Que tipo de evento quiere cotizar?", nombres);
    if (!nombres.includes(opcion)) {
        alert("Por favor seleccione una opcion valida");
        }
    }

    let opcion2 = parseInt(prompt(`Para cuántas personas es su evento ${opcion}?`));
    let resultado;
    
    while (isNaN(opcion2) || opcion2 < 0 || opcion2 > 100000000) {
      opcion2 = parseInt(prompt(`Opción inválida. Por favor, ingrese un número válido para la cantidad de personas.`));
    }
    
    if (opcion2 >= 0 && opcion2 <= 100) {
      resultado = "$10.000";
    } else if (opcion2 >= 101 && opcion2 <= 500) {
      resultado = "$45.000";
    } else if (opcion2 >= 501 && opcion2 <= 100000000) {
      resultado = "$80.000";
    }
    
    alert(`El valor de su evento ${opcion} para ${opcion2} personas es de aproximadamente ${resultado}`);
    
});


