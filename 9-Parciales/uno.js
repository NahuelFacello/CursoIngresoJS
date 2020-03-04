/* 

b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva

*/

function mostrar()
{
	var nombreDeHuesped;
	var cantDePersonas;
	var cantDiasEstadia;
	var formaDePago;
	var respuesta;
	var maximoCantDePersonas;
	var maximoCantDePersonasNombre;
	var contador;
	var maximoDeDias;
	var maximoDeDiasCantDePersonas;
	var contadorQR;
	var contadorTarjeta;
	var contadorEfectivo;
	var promedio;
	var masUtilizada;
	var acumulador;

	contador=0;
	contadorEfectivo=0;
	contadorTarjeta=0;
	contadorQR=0;

	respuesta="s";

	while(respuesta=="s")
	{
		nombreDeHuesped	= prompt("Por favor ingrese su nombre");
		
		do
		{
			cantDePersonas=prompt	("Cuantas personas se van a hospedar?");
			cantDePersonas=parseInt(cantDePersonas);
		}while(cantDePersonas<1||isNaN(cantDePersonas)&&cantDePersonas>20);
		/*Se puede hacer solo con while, peroahorro lineas con do while*/

		do
		{
			cantDiasEstadia	=prompt	("Cuantas dias se va a hospedar?");
			cantDiasEstadia	=parseInt(cantDiasEstadia);
		}while(cantDiasEstadia<1||isNaN(cantDiasEstadia));
		
		do
		{
			formaDePago=prompt("Ingrese forma de pago Efectivo, Tarjeta o QR");
		}while(!isNaN(formaDePago)||formaDePago=="QR"||formaDePago=="Tarjeta"||formaDePago=="Efectivo");

		if(contador==0||cantDePersonas>maximoCantDePersonas)
		{
			maximoCantDePersonas=cantDePersonas;
			maximoCantDePersonasNombre=nombreDeHuesped;
		}
		if(contador==0||cantDiasEstadia>maximoDeDiasCantDePersonas)
		{
			maximoCantDePersonas=cantDePersonas;
			maximoCantDePersonasNombre=nombreDeHuesped;
			console.log(maximoDeDiasCantDePersonas);
			console.log(maximoCantDePersonasNombre);
		}
		switch(formaDePago)
		{
			case "qr":
				contadorQR++;
				break;
			case "Efectivo":
				contadorEfectivo++;
				break;
			default:
				contadorTarjeta++;
				break;
		}

		respuesta=prompt("s para continuar");
		contador=contador++
	}
	promedio=cantDiasEstadia/contador;

	if(contadorQR>contadorTarjeta&&contadorEfectivo)
	{
		masUtilizada="QR";
	}else
	{
		if(contadorTarjeta>contadorEfectivo)
		{
			masUtilizada="Tarjeta";
		}else
		{
			masUtilizada="Efectivo";
		}
	}
	document.write("El huésped que trajo más personas en una sola reserva: "+maximoCantDePersonasNombre);
	document.write("La cantidad de personas que se quedaron más días"+)
}
