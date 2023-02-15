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

let opcion = "";
 while (!nombres.includes(opcion)) {
   opcion = prompt("Escoja una opcion entre las siguientes", nombres);
 if (!nombres.includes(opcion)) {
     alert("Por favor seleccione una opcion valida");
   }
 }
 alert(`perfecto la opcion indicada es ${opcion}`);

let opcion2 = "";
 while (!datosEnServicios.includes(opcion2)) {
    opcion2 = prompt(`¿Que dato de ${opcion} desea conocer ?`, datosEnServicios);
 if (!datosEnServicios.includes(opcion2)) {
    alert("Por favor seleccione una opcion valida");
}
}

let resultado = "";

servicios.forEach((servicio) => {
    if (servicio.nombre === opcion) {
        resultado = servicio[opcion2];
    }
});

alert(`El/a ${opcion2}, de ${opcion} es: ${resultado}`);