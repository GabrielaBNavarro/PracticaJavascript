/*Tarea1:
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
 sólo por minúsculas o por una mezcla de ambas.*/

function infoCadena(cadena = prompt("Ingrese una frase o una palabra")){

 let  min = cadena.toLowerCase()
 let may = cadena.toUpperCase()
    if(min == cadena){
        document.write("Toda la cadena está en minúsculas")

    } else if ( may == cadena){
        document.write("Toda la cadena está en mayúsculas")
    } else {
        document.write("La cadena contiene mayúsculas y minúsculas")
    }
}
 infoCadena()