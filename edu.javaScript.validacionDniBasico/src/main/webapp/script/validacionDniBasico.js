/**
 * 
 */

 function validacionDNI(numDni){
	 let mensajeError1 = "[ERROR] - Numero mayor que 99999999";
	 let mensajeError2 = "[ERROR] - Numero menor que 0";
 	 let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
 	 let posicionLetraDNI, letraDNI;
 	 
 	 if(numDni > 99999999)
 	 	alert(mensajeError1);
 	 else if (numDni < 0)
 	 	alert(mensajeError2)
 	 else {
		posicionLetraDNI = numDni % 23;
		letraDNI = letras[posicionLetraDNI];
		console.log(numDni);
		console.log(letraDNI);
		document.write(numDni + "-" + letraDNI);
	  }
 }