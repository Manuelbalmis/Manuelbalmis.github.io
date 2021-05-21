function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let cartel = xmlDoc.querySelectorAll("pelicula")
	for(let i=0; i<cartel.length; i++)
		if(i%2==0)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p align='right' class=seleccion>" + cartel[i].textContent + "</p>"
				else
		capaVacia.innerHTML = capaVacia.innerHTML + "<p align='right' class=seleccion>" + cartel[i].textContent + "</p>"

				
		
}

function CargarFichero()
{
	loadDocA("peliculas.xml","xml") ;
}
setInterval(CargarFichero,3000);



