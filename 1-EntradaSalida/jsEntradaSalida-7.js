/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	suma=numeroUno+numeroDos;
	alert("La suma de los numeros es "+suma);
	console.log;
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	resta=numeroUno-numeroDos;
	alert("La resta de los numeros es "+resta);
	console.log;
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
	multiplicacion=numeroUno*numeroDos;
	alert("La multiplicacion de los numeros es "+multiplicacion);
	console.log;
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;
	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);
 	division=numeroUno/numeroDos;
	alert("La division de los numeros es "+division);
	console.log;
}
