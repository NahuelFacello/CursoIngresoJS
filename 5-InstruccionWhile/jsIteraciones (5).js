function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	while(sexo!="f"&&sexo!="m")
	{
		sexo=prompt("Por favor, ingrese f o m");
	}
	switch(sexo)
		{
			case "f":
				sexo="Femenino"
				break;
			case "m":
				sexo="Masculino"
				break;
		}
	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN