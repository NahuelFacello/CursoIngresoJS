/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var cantAlambre

	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	cantAlambre=(2*(largo+ancho))*3;
	alert("La cantidad a comprar es de "+cantAlambre+"mts de alambre para un rectangulo.")
}
function Circulo () 
{
	var radio;
	var cantAlambre;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);

	cantAlambre= 2*Math.PI*radio;
	alert("La cantidad a comprar es de "+cantAlambre+"mts de alamabre para un circulo.")
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;
	largo=document.getElementById('Largo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('Ancho').value;
	ancho=parseInt(ancho);
	cemento=(ancho*largo)*2;
	cal=(ancho*largo)*3;
	alert("Es necesario comprar "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");

}
