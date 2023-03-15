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
/////////////////////////////////////////////////TERCERA ENTREGA////////////////
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
  const contenedorCotizaciones = document.getElementById("contenedor-cotizaciones");

  //funcion para obtener la cotizacion con los parametros indicados
  const obtenerCotizacion = (categoria, cantidadPersonas) => {
  const cotizacionCategoria = cotizaciones[categoria];
  const cotizacion = cotizacionCategoria.find(
    c => cantidadPersonas <= c.personas
  );
  return cotizacion ? cotizacion.valor : "No hay cotización disponible";
  };

  //genera la funcion cuando da clic
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

  const cotizacionesGuardadas = JSON.parse(localStorage.getItem("cotizaciones")) || [];
  cotizacionesGuardadas.push(cotizacion);

  localStorage.setItem("cotizaciones", JSON.stringify(cotizacionesGuardadas));

  let contenedorCotizaciones = document.getElementById("contenedor-cotizaciones"); 
  contenedorCotizaciones.innerHTML = "";
  cotizacionesGuardadas.forEach((cotizacion, indice) => {
    const cotizacionHTML = `
      <div class="cotizacion border-top">
        <p>Cotización ${indice + 1}</p>
        <p>Evento: ${cotizacion.evento}</p>
        <p>Cantidad: ${cotizacion.cantidad}</p>
        <p>Valor: ${cotizacion.valor}</p>
      </div>`;

    contenedorCotizaciones.innerHTML += cotizacionHTML;

    });

  });
  function compararCotizaciones() {
    const cotizacionesArr = Object.values(cotizaciones);
    let cotizacionMasBaja = cotizacionesArr[0][0];
    let cotizacionMasAlta = cotizacionesArr[0][0];
  
    cotizacionesArr.forEach((cotizacionesEvento) => {
      cotizacionesEvento.forEach((cotizacionActual) => {
        if (cotizacionActual.valor < cotizacionMasBaja.valor) {
          cotizacionMasBaja = cotizacionActual;
        }
  
        if (cotizacionActual.valor > cotizacionMasAlta.valor) {
          cotizacionMasAlta = cotizacionActual;
        }
      });
    });
    
      // Eliminar el HTML de cotizaciones
      const contenedorCotizaciones = document.getElementById("contenedor-cotizaciones");
      contenedorCotizaciones.innerHTML = "";
    
      //nuevo HTML con los datos de la comparación
      const cotizacionMasBajaHTML = `
        <div class="cotizacion border-top">
          <p>Cotización más baja</p>
          <p>Evento: ${cotizacionMasBaja.evento}</p>
          <p>Cantidad: ${cotizacionMasBaja.personas}</p>
          <p>Valor: ${cotizacionMasBaja.valor}</p>
        </div>
      `;
      
      const cotizacionMasAltaHTML = `
        <div class="cotizacion border-top">
          <p>Cotización más alta</p>
          <p>Evento: ${cotizacionMasAlta.evento}</p>
          <p>Cantidad: ${cotizacionMasAlta.personas}</p>
          <p>Valor: ${cotizacionMasAlta.valor}</p>
        </div>
      `;
      
      contenedorCotizaciones.innerHTML = cotizacionMasBajaHTML + cotizacionMasAltaHTML;
    }
    
    // Obtener el boton para generar la comparación
    const botonComparar = document.getElementById("boton-comparar");
    
    // Agregar el evento al boton para generar la comparación 
    botonComparar.addEventListener("click", function(event) {
      event.preventDefault();
      compararCotizaciones();
    
      const climaDiv = document.getElementById('clima');
      climaDiv.innerHTML = `La temperatura actual es ${temperatura} grados Celsius`;


      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e5311481e2msh375423a9ccd8b23p103d49jsn14cb3c38427c',
          'X-RapidAPI-Host': 'meteostat.p.rapidapi.com'
        }
      };
    
      
      fetch('https://meteostat.p.rapidapi.com/stations/monthly?station=10637&start=2020-01-01&end=2020-12-31', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

  });    
  