function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let entrada = xmlDoc.querySelectorAll("msg")
	for(let i=0; i<entrada.length; i++)
		if (i%2==0)
			capaVacia.innerHTML = capaVacia.innerHTML + "<p align='right' class=seleccion>" + entrada[i].textContent + "</p>"
			else	
				capaVacia.innerHTML = capaVacia.innerHTML + "<p align='left' class=seleccion2>" + entrada[i].textContent + "</p>"
				
		
}



setInterval(CargarFichero,3000);
function CargatFichero()
{
	loadDocA("conversacion.xml","xml") ;
}
