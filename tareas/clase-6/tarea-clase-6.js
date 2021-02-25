/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

let $ingresarDatos = document.querySelector("#ingresar-datos");
$ingresarDatos.onclick = function(){
    limpiarDatos(); 
    crearIntegrantes();       
    document.querySelector("#calcular").className="";    
    return false
}
let $botonCalcular = document.querySelector("#calcular");
$botonCalcular.onclick = function(){
    let edades = document.querySelectorAll("#integrantes input");
    document.querySelector("#menor-edad").textContent=`La menor edad es ${devolverMinimo(edades)}`;
    document.querySelector("#mayor-edad").textContent=`La mayor edad es ${devolverMaximo(edades)}`;
    document.querySelector("#promedio-edad").textContent=`La edad promedio ${calcularPromedio(edades)}`;
    document.querySelector("#empezar-nuevo").className="";
}

function limpiarDatos(){
    nodoIntegrantes=document.querySelector("#integrantes");
    nodoIntegrantes.textContent="";
    

}

function crearIntegrantes(){
    let cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);
    let nodoIntegrantes = document.querySelector("#integrantes");
    for(let i=1; i<=cantidadIntegrantes; i++){        
        let label = document.createElement("label");
        let textoLabel = document.createTextNode(`Edad integrante ${i}`)
        label.appendChild(textoLabel);
        let salto = document.createElement("br");
        nodoIntegrantes.appendChild(label);
        let campoEntrada = document.createElement("input");
        nodoIntegrantes.appendChild(campoEntrada);
        nodoIntegrantes.appendChild(salto);        
    }
}

function ocultarResultados(){
  const resultados=document.querySelector("#resultados");
  resultados.className="oculto";
}

let $botonEmpezarDeNuevo = document.querySelector("#empezar-nuevo");
$botonEmpezarDeNuevo.onclick = function(){
    limpiarDatos()
    ocultarResultados();
}

function calcularPromedio(numeros){
    let sumaTotal=0
    for (let i=0; i<numeros.length; i++){
        sumaTotal+=Number(numeros[i].value);
    }
    return sumaTotal/numeros.length;
}

function devolverMaximo(array){
    let maximo=0;
    for(let i=0; i<array.length; i++){
      if(Number(array[i].value)>maximo){
        maximo=Number(array[i].value);
      }
    }
    return maximo;
  }

function devolverMinimo(array){
    let minimo=array[0].value;
    for(let i=1; i<array.length; i++){
      if(Number(array[i].value)<minimo){
        minimo=Number(array[i].value);
      }
    }
    return minimo;
}

