/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	/*var sueldo;
	var incremento;
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	incremento=10/100;
	document.getElementById('resultado').value=sueldo+(sueldo*incremento);
	console.log*/
	var sueldo;
	var incremento;
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	incremento=prompt("Ingrese el incremento %");
	incremento=incremento/100;
	document.getElementById('resultado').value=sueldo+(sueldo*incremento);
}
