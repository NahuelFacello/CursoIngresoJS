/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;


function comenzar()
{
	numeroSecreto=(Math.floor(Math.random()*100)+1);
	console.log(numeroSecreto);
	alert("Ya se creo el numero secreto");
}

function verificar()
{
	numeroIngresado=document.getElementById('numero').value;
	numeroIngresado=parseInt(numeroIngresado);
	contadorIntentos=0;
	
	while(numeroIngresado!=numeroSecreto)
	{
		if(numeroIngresado>numeroSecreto)
		{
			alert("Se paso");	
		}else
		{
			alert("Falta");
		}
		contadorIntentos=contadorIntentos+1;
		document.getElementById('intentos').value=contadorIntentos;
		numeroIngresado=prompt("Intentelo de nuevo")

	}
	alert("Usted es un ganador! y con "+contadorIntentos+" intentos");
	
}