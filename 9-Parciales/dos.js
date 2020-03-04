/*De los movimientos de un banco necesito saber, el nombre del cliente, la edad (debe ser mayor de edad
), sexo, tipo de transaccion (extraccion o deposito) e importe (validar que no sea negativo
1-Promedio de edad
2-Nombre del mas joven
3-Cantidad de hombres
4-Cantidad de mujeres
5-Sexo del importe mas alto
6-Operacion mas utilizada
7-Importe del mas viejo
*/

function mostrar()
{
  var nombre;
  var edad;
  var sexo;
  var tipoDeTransaccion;
  var importe;
  var respuesta;
  var promedioEdad;
  var acumuladorDeEdad;
  var contador;
  var minimoEdad;
  var minimoEdadNombre;
  var contadorSexoFemenino;
  var contadorSexoMasculino;
  var cantidadDeHombres;
  var cantidadDeMujeres;
  var sexoImporteMasAlto;
  var maximoDeImporte;
  var contadorExtraccion;
  var contadorDeposito;
  var tipoDeTransaccionMasUtilizado;
  var maximoDeEdad;
  var maximoDeEdadImporte;
  var importeDelMasViejo;


  contador=0;
  contadorEdad=0;
  respuesta="si";
  minimoEdad=112;
  contadorSexoMasculino=0;
  contadorSexoFemenino=0;
  maximoDeImporte=0;
  acumuladorDeEdad=0;
  contadorExtraccion=0;
  contadorDeposito=0;
  maximoDeEdad=0;

  while(respuesta=="si")
  {
  	do
  	{
  		nombre=prompt("Ingrese su nombre");
  	}while(!isNaN(nombre));

  	do
  	{
  		edad=prompt("Ingrese su edad");
  		edad=parseInt(edad);
  	}while(isNaN(edad)||edad<17||edad>112);

  	do
  	{
  		sexo=prompt("Sexo: M o F");
  	}while(!isNaN(sexo)||sexo!="m"&&sexo!="f");

  	do
  	{
  		tipoDeTransaccion=prompt("Deposito o extraccion");
  	}while(!isNaN(tipoDeTransaccion)||tipoDeTransaccion!="deposito"&&tipoDeTransaccion!="extraccion");

  	do
  	{
  		importe=prompt("Ingrese el importe");
  		importe=parseInt(importe);
  	}while(isNaN(importe)||importe<0||importe>5000);

  	//validar datos
  	acumuladorDeEdad=acumuladorDeEdad+edad;
  	contador++;

  	if(contador==0||edad<minimoEdad)
		{
			minimoEdad=edad;
			minimoEdadNombre=nombre;
		}

  	switch(sexo)
  	{
  		case "m":
  			contadorSexoMasculino++;
  			break;
  		case "f":
  			contadorSexoFemenino++;
  			break;
  	}
	
	if(contador==0||importe>maximoDeImporte)
	{
		maximoDeImporte=importe;
		sexoImporteMasAlto=sexo;
	}  
	
	switch(tipoDeTransaccion)
	{
		case "extraccion":
			contadorExtraccion++;
			break;
		default:
			contadorDeposito++;
			break;
	}

	if(contador==0||edad>maximoDeEdad)
	{
		maximoDeEdadImporte=importe;
	}  
  	respuesta=prompt("Ingrese si, si desea realizar otra transaccion");
  	
  	
  }
  promedioEdad=acumuladorDeEdad/contador;

  cantidadDeMujeres=contadorSexoFemenino;
  cantidadDeHombres=contadorSexoMasculino;

  if(sexoImporteMasAlto=="m")
  {
  	sexoImporteMasAlto="Masculino";
  }else
  {
  	sexoImporteMasAlto="Femenino";
  }
  if(contadorExtraccion>contadorDeposito)
  {
  	tipoDeTransaccionMasUtilizado="Extraccion";
  }else
  {
  	tipoDeTransaccionMasUtilizado="Deposito";
  }

  importeDelMasViejo=maximoDeEdadImporte;
  console.log(importeDelMasViejo);

  document.write("<br>El promedio de edad es "+promedioEdad);
  document.write("<br>El mas joven es "+minimoEdadNombre);
  document.write("<br>La cantidad de mujeres es "+cantidadDeMujeres);
  document.write("<br>La cantidad de hombres es "+cantidadDeHombres);
  document.write("<br>El sexo del importe mas alto es "+sexoImporteMasAlto);
  document.write("<br>El tipo de transaccion mas utilizada es "+tipoDeTransaccionMasUtilizado);
  document.write("<br>La edad del importe mas alto es "+importeDelMasViejo);



}
