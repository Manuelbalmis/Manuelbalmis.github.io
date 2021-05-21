function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let peliculas = xmlDoc.querySelectorAll("pelicula")
	for(let i=0; i<peliculas.length; i++)
		if(i==2)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class=seleccion>" + peliculas[i].textContent + "</p>"
			else
				capaVacia.innerHTML = capaVacia.innerHTML + "<p class='seleccion2'>" + peliculas[i].textContent + "</p>"
}

loadDocA("peliculas.xml","xml") ;
