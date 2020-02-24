function mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño= document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes tiene 28 dias");
			break;
		case "Marzo":
		case "Mayo":
		case "Enero":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias");
			break;
		default:
			alert("Este mes tiene 30 dias");
			break;
	}
}//FIN DE LA FUNCIÓN