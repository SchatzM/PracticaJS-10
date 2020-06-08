/**
 * Práctica 13
 * Cambio por Fecha
 * Brian Passos
 */
'use strict';

const	elemento = { // Constante con con referencia al elemento que modificaremos según el día de la semana y array con las posibles clases a aplicar
			colorCambiante: document.body.querySelector ('.colorCambiante'),
			clasesColores : ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
		},
		colorDía = (díaSemana) => { // Función que aplicará la clase correspondiente al elemento principal según el día indicado o el actual en su defecto
			let día = () => { // Comprobamos si se ha especificado un día y lo devolvemos u obtenemos el número de día actual
					return Number (díaSemana != undefined ? díaSemana : new Date ().getDay ());
				},
				colorDelDía = elemento.clasesColores [día()], // Según el número de día obtenido anteriormente, seleccionamos la clase correspondiente del array global
				cantidadClases = elemento.clasesColores.length-1, // Calcula la cantidad de clases de colores disponibles
				elementosBienvenida = { // Objeto con las referencias a los elementos del recuadro de mensaje de bienvenida
					Título: elemento.colorCambiante.querySelector('h1'),
					Subtítulo: elemento.colorCambiante.querySelector('h2 input')
				};

			if (día () > cantidadClases || día () < 0) { // Comprobamos que el número de día no esté fuera del rango o devolvemos un error en consola
				return console.error ('día no válido');
			}

			elemento.colorCambiante.classList.remove (...elemento.clasesColores); // Eliminamos clases de cualquier día de la semana antes de aplicar una nueva
			elemento.colorCambiante.classList.add (colorDelDía); // Añadimos la clase del día correspondiente según número dado o día actual

			elementosBienvenida.Título.innerText = colorDelDía; // Cambiamos el texto del recuadro de mensaje por el día de la semana cuya clase ha sido aplicada
			elementosBienvenida.Subtítulo.max = cantidadClases; // Asignamos atributo al input con el número máximo de día que pueden ser seleccionados dentro del mismo
			elementosBienvenida.Subtítulo.addEventListener ('change', () => { // Evento ejecutado al cambiar el valor dentro del input
				setTimeout (() => {
					colorDía (elementosBienvenida.Subtítulo.value) // Llama a la función que modifica los colores
				}, 200);
			});
			elementosBienvenida.Subtítulo.value = día (); // Mostramos en pantalla el número del día cuya clase es aplicada
		};

colorDía (); // LLamamos a la función principal
