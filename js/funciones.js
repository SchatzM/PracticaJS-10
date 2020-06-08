/**
 * Práctica 13
 * Cambio por Fecha
 * Brian Passos
 */
'use strict';

const	elemento = {
			colorCambiante: document.body.querySelector ('.colorCambiante'),
			clasesColores : ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
		},
		colorDía = (díaSemana) => {
			let día = () => {
					return Number (díaSemana != undefined ? díaSemana : new Date ().getDay ());
				},
				colorDelDía = elemento.clasesColores [día()],
				cantidadClases = elemento.clasesColores.length-1,
				elementosBienvenida = {
					Título: elemento.colorCambiante.querySelector('h1'),
					Subtítulo: elemento.colorCambiante.querySelector('h2 input')
				};

			if (día () > cantidadClases || día () < 0) {
				return console.error ('día no válido');
			}

			elemento.colorCambiante.classList.remove (...elemento.clasesColores);
			elemento.colorCambiante.classList.add (colorDelDía);

			elementosBienvenida.Título.innerText = colorDelDía;
			elementosBienvenida.Subtítulo.max = cantidadClases;
			elementosBienvenida.Subtítulo.addEventListener ('change', () => {
				setTimeout (() => {
					colorDía (elementosBienvenida.Subtítulo.value)
				}, 200);
			});
			elementosBienvenida.Subtítulo.value = día ();
		};

colorDía ();
