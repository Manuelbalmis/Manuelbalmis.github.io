function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let entrada = xmlDoc.querySelectorAll("mio","otro")
	for(let i=0; i<entrada.length; i++)
		
			capaVacia.innerHTML = capaVacia.innerHTML + "<p class=seleccion>" + entrada[i].textContent + "</p>"
		
}

loadDocA("conversacion.xml","xml") ;

