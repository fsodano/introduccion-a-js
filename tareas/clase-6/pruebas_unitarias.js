function prueba_validar_integrantes(){
	console.assert(validar_integrantes(5)==="", "validar_integrantes esta fallando con una cantidad correcta")
	console.assert(validar_integrantes("Asd")==="Solo se puede ingresar numeros", "validar_integrantes esta tomando como correcto una cantidad incorrecta")
	console.assert(validar_integrantes(100)==="Demasiados familiares", "validar_integrantes esta tomando demasiados familiares")
	//console.assert(validar_integrantes())
}

prueba_validar_integrantes()
