function CargarFichero()
{
	loadDocA("peliculas.xml","xml") ;
}
setInterval(CargarFichero,3000);

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let cartel = xmlDoc.querySelectorAll("pelicula")
	for(let i=0; i<cartel.length; i++)
		
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class=seleccion>" + cartel[i].textContent + "</p>"
			
}


