/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/
document.write("Ciudades <br>")
let ciudad = prompt("Ingrese el nombre de la ciudad. Para salir ingrese 0 o presione el botón de Cancelar ");
let ciudades = [];
if (ciudad == null || ciudad == ""){
    alert("Usted no ha ingresado una ciudad")
}else{
while (ciudad && ciudad != "0") {
    if(isNaN(parseInt(ciudad))== false){
        alert("Usted ha ingresado un número. Debe ingresar una ciudad.")
    }else{
    ciudad = ciudad.charAt(0).toUpperCase() + ciudad.substr(1,ciudad.length-1).toLowerCase();
    ciudades.push(ciudad);
    }
    ciudad = prompt("Ingrese el nombre de la ciudad. Para salir ingrese 0 o presione el botón de Cancelar ");

}
finalizar()

}
function finalizar(){
    document.write(`La cantidad de ciudades ingresadas es ${ciudades.length}<br>`)
    document.write(`La primer ciudad ingresada es ${ciudades[0] } <br>`)
    if (ciudades.length>2){
    document.write(`La tercer ciudad en la lista es ${ciudades[2] } <br>`)
    document.write(`La última ciudad en la lista es ${ciudades[ciudades.length - 1] } <br>`)
    }
    ciudades.push('París')
    if (ciudades.length>1) {  
    document.write(`La segunda ciudad en la lista es ${ciudades[1] } <br>`)
    ciudades.splice(1,1,'Barcelona')
      }
      document.write("La lista de ciudades es: <br> ")
      listarCiudades()
}

function listarCiudades(){
    ciudades.map(function (ciudad, index ){
        document.write(`${index +1} - ${ciudad}<br>`)
    })
}