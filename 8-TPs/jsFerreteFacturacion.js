/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{	
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var suma;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);
	
	suma=precioUno+precioDos+precioTres;

	console.log(suma);

	alert("La suma de los precios es "+suma);
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var promedio;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);	

	promedio=(precioUno+precioDos+precioTres)/3;
	alert("El promedio de los precios es "+promedio);
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioFinal;
	var precioFinal;

	precioUno=document.getElementById('PrecioUno').value;
	precioUno=parseInt(precioUno);
	precioDos=document.getElementById('PrecioDos').value;
	precioDos=parseInt(precioDos);
	precioTres=document.getElementById('PrecioTres').value;
	precioTres=parseInt(precioTres);	

	precioFinal=(precioUno+precioDos+precioTres)+(precioUno+precioDos+precioTres)*21/100;
	alert("El precio final con IVA es "+precioFinal);
}