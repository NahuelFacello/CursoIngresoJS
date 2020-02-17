function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
//tomo la edad  
	/*if(edad<18&&edad>12)
		{
			alert("Es adolescente")
		} Tener en cuenta que es lo mismo pero si quiero hacer algo entre los conjuntos, no lo puedo hacer.
		*/

	if(edad<18)
	{
		if(edad>12)
		{
			alert("Es adolescente")
		}
	}


}//FIN DE LA FUNCIÓN