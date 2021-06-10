/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el 
usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, 
al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle 
con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/
let numero = 0
let numUsuario = 0
document.querySelector('#inGame').style.visibility = "hidden";


function letsPlay(){
    document.querySelector('#inGame').style.visibility = "visible";
    numeroAleatorio()
    
}

function numeroAleatorio(){
 numero= Math.round(Math.random()*100)
 document.querySelector('#numIngresado').focus()
}


function numeroUsuario(){
    numUsuario = parseInt(document.querySelector('#numIngresado').value)
    if(isNaN(numUsuario)){
        alert('debes ingresar un número')
        return 
    }
     while( numero !== numUsuario){
      if( numero < numUsuario){
            alert('Te pasaste! el número que buscas es más pequeño')
            document.querySelector('#numIngresado').value=""
            document.querySelector('#numIngresado').focus()
           return
      }else {
        alert('Casi! el número que buscas es mayor!')
        return
      }
     }
        alert('Ganaste! adivinaste el número mágico')


    }

