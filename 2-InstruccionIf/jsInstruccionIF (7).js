function mostrar()
{
	var edad;
	var estado;
	estado=document.getElementById('estadoCivil').value;
	edad=document.getElementById('edad').value;
		if(edad<18&&estado!='Soltero')
		{
		alert("Es muy pequeño para NO ser soltero.");
		}
}
//FIN DE LA FUNCIÓN
//tomo la edad 