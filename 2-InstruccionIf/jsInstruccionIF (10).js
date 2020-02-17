function mostrar()
{
	var random;
	random=Math.floor((Math.random() * 10) + 1);
	console.log(random);
	alert("Tu nota es "+random);
	if(random>8)
		{
			alert("EXCELENTE")
		}
		else
		{
			if(random<5)
			{
				alert("Vamos, la proxima se puede")
			}
			else
			{
				alert("APROBÓ")
			}
		}

	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN