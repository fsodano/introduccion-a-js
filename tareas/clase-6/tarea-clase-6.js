/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let cant_familiares=prompt("Cuanta gente hay en el grupo familiar? (numeros)")

if (validar_integrantes(cant_familiares)==="" && Number(cant_familiares)>0){

	function crear_inputs(numero_familiares){
		let i=1
		for(i;i<=Number(numero_familiares);i++) {
			

			//Creando nodo BOOTSTRAP

			const div1=document.createElement("div")
			div1.className="input-group mb-3 col-sm-3"

			const div2=document.createElement("div")
			div2.className="input-group-prepend"
			div1.appendChild(div2)

			const span=document.createElement("span")
			span.className="input-group-text"
			span.id="inputGroup-sizing-default"
			span.innerText=`Edad familiar ${i}`
			div2.appendChild(span)

			const input=document.createElement("input")
			input.id="input_edad"
			input.type="number"
			input.className="form-control"
			input["arial-label"]="Sizing example input"
			input["aria-describedby"]="inputGroup-sizing-default"
			div1.appendChild(input)

			document.querySelector("body").appendChild(div1)


		}
		const boton=document.createElement("button")
		boton.textContent="Calcular"
		boton.className="btn btn-primary"
		document.querySelector("body").appendChild(boton)

		const boton_salario=document.createElement("button")
		boton_salario.textContent="Agregar salarios"
		boton_salario.id="salarios"
		boton_salario.className="btn btn-primary"
		document.querySelector("body").appendChild(boton_salario)

		let parrafo=document.createElement("p")
		document.querySelector("body").appendChild(parrafo)
	}
	crear_inputs(cant_familiares)


	const boton_calcular=document.querySelector("button")
	boton_calcular.onclick=function(){
		let $edades=[]
		let edades_codigo=document.querySelectorAll("#input_edad")

		let inputs_correctos=false

		for (let i = edades_codigo.length - 1; i >= 0; i--) {
			if(edades_codigo[i].value>0 && !/[.,]/.test(edades_codigo[i].value)) {
				$edades.push(Number(edades_codigo[i].value))
				inputs_correctos=true
			}
		}

		if(inputs_correctos){
			let mayor_edad=Math.max.apply(null,$edades)
			let menor_edad=Math.min.apply(null,$edades)
			let promedio=0
			for (let i = $edades.length - 1; i >= 0; i--) {
				promedio+=Number($edades[i])
			}
			promedio=promedio/$edades.length

			document.querySelector("#ra-parte").className="alert alert-primary"
			document.querySelector("#ra-parte").role="alert"

			document.querySelector("#ra-parte").textContent=`La mayor edad es ${mayor_edad} y la menor es ${menor_edad}. El promedio es ${promedio}. 
			(Los campos no ingresados no son tenidos en cuenta)`
		}else{
			
			document.querySelector("#ra-parte").className="alert alert-danger"
			document.querySelector("#ra-parte").role="alert"
			document.querySelector("#ra-parte").textContent="No hay ningun campo bien ingresado, recuerda que son solo numeros"
		}
	}
}else{
	if(validar_integrantes(cant_familiares)){
		alert(validar_integrantes(cant_familiares))
	}else{
		alert("No ingresaste ningun numero valido")
	}


	location.reload()
}

//--------------------------------------------------------------PARTE 2---------------------------------------------------------------------------------------

let boton_salario=document.querySelector("#salarios")

let salarios_ya_creados=0

boton_salario.onclick=function(){
	let trabajadores=prompt("Cuantos familiares trabajan? (numeros)")

	

	if (validar_integrantes(trabajadores)==="" && Number(trabajadores)+salarios_ya_creados<=cant_familiares && Number(trabajadores)>0) {
		
		for(let i=1;i<=Number(trabajadores);i++) {
			

			//Creando nodo BOOTSTRAP

			const div1=document.createElement("div")
			div1.className="input-group mb-3 col-sm-3"

			const div2=document.createElement("div")
			div2.className="input-group-prepend"
			div1.appendChild(div2)

			const span=document.createElement("span")
			span.className="input-group-text"
			span.id="inputGroup-sizing-default"
			span.textContent=`Salario anual del familiar:`
			div2.appendChild(span)

			const input=document.createElement("input")
			input.type="number"
			input.className="form-control"
			input["arial-label"]="Sizing example input"
			input["aria-describedby"]="inputGroup-sizing-default"
			input.id="salario"
			div1.appendChild(input)

			document.querySelector("body").appendChild(div1)

		}
		if(document.querySelector("#calcular-salarios")==null){
			let boton_calcular_salarios=document.createElement("button")
			boton_calcular_salarios.textContent="Calcular salarios"
			boton_calcular_salarios.id="calcular-salarios"
			boton_calcular_salarios.className="btn btn-primary"
			document.querySelector("body").appendChild(boton_calcular_salarios)
		}else{
			document.querySelector("#calcular-salarios").remove()
			let boton_calcular_salarios=document.createElement("button")
			boton_calcular_salarios.textContent="Calcular salarios"
			boton_calcular_salarios.id="calcular-salarios"
			boton_calcular_salarios.className="btn btn-primary"
			document.querySelector("body").appendChild(boton_calcular_salarios)
		}

		salarios_ya_creados+=document.querySelectorAll("#salario").length

		mostrar_calculos_salarios()
	}else{
		if(validar_integrantes(trabajadores)!==""){

			document.querySelector("#da-parte").className="alert alert-danger"
			document.querySelector("#da-parte").role="alert"
			document.querySelector("#da-parte").textContent=validar_integrantes(trabajadores)

		}else if(!(Number(trabajadores)+salarios_ya_creados<=cant_familiares)){

			document.querySelector("#da-parte").className="alert alert-danger"
			document.querySelector("#da-parte").role="alert"
			document.querySelector("#da-parte").textContent="No puede haber mas trabajadores que integrantes"

		}else{
			
			document.querySelector("#da-parte").className="alert alert-danger"
			document.querySelector("#da-parte").role="alert"
			document.querySelector("#da-parte").textContent="No ingresaste ningun numero valido"
			
		}
	}

	salarios_ya_creados=document.querySelectorAll("#salario").length

 
}



function mostrar_calculos_salarios(){
	const $boton_calcular_salarios=document.querySelector("#calcular-salarios")


	$boton_calcular_salarios.onclick=function(){


		let salarios_codigo=document.querySelectorAll('#salario')
		let $salarios=[]


		for(i=0;i<salarios_codigo.length;i++){
			if(salarios_codigo[i].value!=""){
				$salarios.push(Number(salarios_codigo[i].value))
			}
		}

		if(validar_inputs($salarios) && $salarios.length>0){

			const mayor_salario=Math.max.apply(null,$salarios)
			const menor_salario=Math.min.apply(null,$salarios)			//Bugs con el salario
			let salario_mensual_promedio
			function F_salario_mensual_promedio(salarios_anuales){
				let salarios_totales=0
				for (let i=0;i<salarios_anuales.length;i++){
					salarios_totales=salarios_totales+Number(salarios_anuales[i])
				}
				let salario_total_mensual=Number(salarios_totales/12)
				salario_mensual_promedio=Number(salario_total_mensual/salarios_anuales.length)
			}

			F_salario_mensual_promedio($salarios)

			document.querySelector("#da-parte").className="alert alert-primary"
			document.querySelector("#da-parte").role="alert"

			document.querySelector("#da-parte").textContent=`El mayor salario anual es de $${new Intl.NumberFormat().format(mayor_salario)},
			 el menor es de $${new Intl.NumberFormat().format(menor_salario)}. El salario mensual promedio de todo
			 es de $${new Intl.NumberFormat().format(salario_mensual_promedio)} (Los campos no ingresados no son tenidos en cuenta)`
		}else{
			//alert("Los salarios deben ser mayores a $0")

			document.querySelector("#da-parte").className="alert alert-danger"
			document.querySelector("#da-parte").role="alert"
			document.querySelector("#da-parte").textContent="Debes completar los campos con numeros mayores a 0"
		}
	}	
}

function validar_integrantes(integrantes){
	if (integrantes<25 && !/[a-z]/i.test(integrantes) ){
		return ""
	}if (/[a-z]/i.test(integrantes)){
		return "Solo se puede ingresar numeros"
	}if(integrantes>25){
		return "No se admiten numero demasiados grandes"
	}if(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(integrantes)){
		return "No se admiten signos"
	}

}

function validar_inputs(array_numero){

	let inputs_correctos=true

	array_numero.forEach(function(e){
		if(e<1){
			inputs_correctos=false
		}else{
			inputs_correctos=true
		}

	})
	return inputs_correctos
}



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
