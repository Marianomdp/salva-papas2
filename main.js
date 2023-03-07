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
/*
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
    const primeraEntrada = document.getElementById("tipo-evento");
    const primera = primeraEntradaInput.value;

    const segundaEntrada = document.getElementById("cantidad-personas");
    const segunda = segundaEntradaInput.value;    

    let resultado 
      if (primera == "corporativos") {
        if (segunda >= 0 && segunda <= 100) {
          resultado = 10000;
        } else if (segunda >= 101 && segunda <= 500) {
          resultado = 20000;
        } else if (segunda >= 501 && segunda <= 1000000) {
          resultado = 50000;
        }
      } else if (primera == "ferias") {
        if (segunda >= 0 && segunda <= 100) {
          resultado = 8000;
        } else if (segunda >= 101 && segunda <= 500) {
          resultado = 18000;
        } else if (segunda >= 501 && segunda <= 1000000) {
          resultado = 40000;
        }
      } else if (primera == "festivales") {
        if (segunda >= 0 && segunda <= 100) {
          resultado = 7000;
        } else if (segunda >= 101 && segundas <= 500) {
          resultado = 15000;
        } else if (segunda >= 501 && segunda <= 1000000) {
          resultado = 35000;
        }
      } else if (primera == "masivos") {
        if (segunda >= 0 && segunda <= 100) {
          resultado = 100000;
        } else if (segunda >= 101 && segunda <= 500) {
          resultado = 200000;
        } else if (segunda >= 501 && segunda <= 1000000) {
          resultado = 500000;
        }
      }

const valores = {Evento:primera, Cantidad: segunda};
localStorage.setItem("cotizacion", JSON.stringify(valores));

  alert(`La cotización es: $${resultado}`);
    
});
*/
//TERCERA ENTREGA////////////////
//arreglos de cotizaciones
const cotizaciones = {
    corporativos: [
      { personas: 100, valor: 10000 },
      { personas: 500, valor: 20000 },
      { personas: 1000000, valor: 50000 }
    ],
    ferias: [
      { personas: 100, valor: 8000 },
      { personas: 500, valor: 18000 },
      { personas: 1000000, valor: 40000 }
    ],
    festivales: [
      { personas: 100, valor: 7000 },
      { personas: 500, valor: 15000 },
      { personas: 1000000, valor: 35000 }
    ],
    masivos: [
      { personas: 100, valor: 100000 },
      { personas: 500, valor: 200000 },
      { personas: 1000000, valor: 500000 }
    ]
  };
  
 //traigo el boton 
let botton = document.getElementById("boton");
const contenedorCotizaciones = document.getElementById("contenedorCotizaciones");

//funcion para obtener la cotizacion con los parametros indicados
const obtenerCotizacion = (categoria, cantidadPersonas) => {
  const cotizacionCategoria = cotizaciones[categoria];
  const cotizacion = cotizacionCategoria.find(
    c => cantidadPersonas <= c.personas
  );
  return cotizacion ? cotizacion.valor : "No hay cotización disponible";
};

//genera la funcion cuando da click
botton.addEventListener('click', (event) => {
  event.preventDefault();
  
  let primeraEntradaInput = document.getElementById("tipo-evento");
  let primera = primeraEntradaInput.value;

  let segundaEntradaInput = document.getElementById("cantidad-personas");
  let segunda = parseInt(segundaEntradaInput.value);

  
  if (isNaN(segunda)) {
    alert("Ingrese un número válido para la cantidad de personas");
    return;
  }

  //muestra el resultado en un alert de sweet alert2
  const resultado = obtenerCotizacion(primera, segunda);

  Swal.fire({
    title: '¡Excelente!',
    text: `La cotización es: $${resultado}`,
    icon: 'success',
    timer: 3000, 
  });

  const cotizacion = {
    evento: primera,
    cantidad: segunda,
    valor: resultado
  };

  let cotizacionesGuardadas = JSON.parse(localStorage.getItem("cotizaciones")) || [];
  cotizacionesGuardadas.push(cotizacion);

  localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesGuardadas));

  let contenedorCotizaciones = document.getElementById("contenedorCotizaciones");   
  contenedorCotizaciones.innerHTML = "";
  cotizacionesGuardadas.forEach((cotizacion, indice) => {
    const cotizacionHTML = `
      <div class="cotizacion">
         <p>Cotización ${indice + 1}</p>
         <p>Evento: ${cotizacion.evento}</p>
         <p>Cantidad: ${cotizacion.cantidad}</p>
         <p>Valor: ${cotizacion.valor}</p>
       </div>`;
    contenedorCotizaciones.innerHTML += cotizacionHTML;
  });    
});