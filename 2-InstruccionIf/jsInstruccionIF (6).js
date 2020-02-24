function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
//tomo la edad  
	if(edad<13)
	{
		alert("Eres un niño");
	}
	else
	{
		if(edad>18)
		{
			alert("Eres mayor de edad")
		}
		else
		{
			alert("Eres un adolescente")
		}
	}




}//FIN DE LA FUNCIÓN