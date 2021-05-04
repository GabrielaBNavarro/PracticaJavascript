//EstructuraCondicional
//switch
let numero = parseInt(prompt("Ingrese un número"));

switch (numero) {
  case 10:
    console.log("El número es 10");
    break;
  case 25:
    console.log("EL número es 25");
    break;
  case 3:
    console.log("EL número es 3");
    break;
  default:
    console.log("El número es otro valor");
    break;
}
//
let dianumero = new Date().getDay();

switch (dianumero) {
  case 0:
    console.log("Hoy es Domingo");
    break;
  case 1:
    console.log("Hoy es Lunes");
    break;

  case 2:
   console.log( "Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miercoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;

  default:
    console.log("Hoy es Sábado");
    break;
}
//----------------------
let comando = prompt('Ingrese un comando (alerta,consola, print)')
switch (comando) {
    case 'alerta':
        alert('usando switch en un alert')
        
        break;
    case 'consola':
        console.log('Usando switch en la consola')
        break
    case 'print':
        document.write('Usando switch en el navegador')
        break
    default:
        console.error('No existe ese comando, no sea mala persona')
        break;
}
 