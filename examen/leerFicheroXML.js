let intervalo = setInterval(CargarFichero,3000);

function CargarFichero()
{
	loadDocA("peliculas.xml","xml") ;
}

function Parar(){
	clearInterval(intervalo)
}
Parar()


function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let cartel = xmlDoc.querySelectorAll("pelicula")
	for(let i=0; i<cartel.length; i++)
		
		capaVacia.innerHTML = capaVacia.innerHTML + "<p class=seleccion>" + cartel[i].textContent + "</p>"
			
}

