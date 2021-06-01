/* 
El objeto window representa la ventana que contiene el documento DOM
*/
/*
//navigator
let browser
let userAgent =navigator.userAgent;
if(userAgent.indexOf('Chrome')>-1){
    browser = 'Google Chrome';
}else if (userAgent.indexOf('Safari')> -1){
    browser= 'Apple Safari';
}else if(userAgent.indexOf('Firefox') > -1){
    browser='Mozilla Firefox';
}
alert(`Usted está usando ${browser}`)
*/
//location

//location.reload();//recargar la pagina
//location.assign('http://google.com')
// location.replace(('http://google.com'))
// function sendData(data){
//     location.search=data;
// }
// sendData('hola')

//history 
// sirve para moverme en el historial, usando history.go(valor) para ir hacia adelante con un valor positivo, para ir hacia atras con un valor negativo
//history.go(-1); // vuelve una pagina hacia atrás en el historial


//Interval

// let intervalo=null
// let contador = 0
// function iniciarContador(){
//     intervalo= setInterval(function(){
//         console.log(contador)
//         contador += 1
//     }, 1000)

// }
// function pausarContador(){
//     if( intervalo !== null){
//         clearInterval(intervalo);
//     }
// }
// function reiniciarContador(){
//     pausarContador();
//     contador=0;
//     console.clear()
//     iniciarContador();
// }
// setTimeout
setTimeout(function(){

},2000)

function logIn(){
    setTimeout(function(){
      let usuario = document.getElementById('userText').value 
      if(usuario){
          alert('Usuario Logueado \u{1F913}')
      } else{
          console.error('El usuario no se ingresó')
      }
      document.getElementById("userText").value = "";
     document.getElementById("userText").focus();

    },2000)
}