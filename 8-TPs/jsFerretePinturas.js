/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var acentigrados;
	temperatura=document.getElementById('Temperatura').value;
	temperatura=parseInt(temperatura);
	acentigrados=(temperatura-32)/1.8;
	alert(temperatura+"ºF equivalen a "+acentigrados+"ºC");

}

function CentigradosFahrenheit () 
{
	var temperatura;
	var afahrenheit;
	temperatura=document.getElementById('Temperatura').value;
	temperatura=parseInt(temperatura);
	afahrenheit=(temperatura*1.8)+32;
	alert(temperatura+"ºC equivalen a "+afahrenheit+"ºF");
}
