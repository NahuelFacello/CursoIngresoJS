function mostrar()
{
	var edad;

	edad=document.getElementById('edad').value;
//tomo la edad  
	if(edad>17)
	{
		alert("Es mayor de edad");
	}else(edad<18)
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN