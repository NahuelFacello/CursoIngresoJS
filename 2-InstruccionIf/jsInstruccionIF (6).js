function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
//tomo la edad  
	if(edad>12&&edad<18)
	{
		alert("Es adolescente");
	}
	else
	{
		if(edad>18)
		{
			alert("Es mayor de edad")
		}
		else
		{
			alert("Es niño")
		}
	}




}//FIN DE LA FUNCIÓN