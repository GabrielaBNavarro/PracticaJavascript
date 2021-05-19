/*Dados
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random 
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
 repitiendo 50 veces esta operación.*/
document.write("Dados 🎲🎲 <br>")
let s2 = s3 = s4 = s5 = s6 = s7 = s8 = s9 = s10 = s11 = s12 = 0;
let veces= []
function tiraDado1() {
  let dado1 = parseInt(6 * Math.random() + 1);
  return dado1;
}

function tiraDado2() {
  let dado2 = parseInt(6 * Math.random() + 1);
  return dado2;
}

for (let i = 0; i < 50; i++) {
  let suma = tiraDado1() + tiraDado2();

  switch (suma) {
    case 2:
      s2++;
      break;
    case 3:
      s3++;
      break;
    case 4:
      s4++;
      break;
    case 5:
      s5++;
      break;
    case 6:
      s6++;
      break;
    case 7:
      s7++;
      break;
    case 8:
      s8++;
      break;
    case 9:
      s9++;
      break;
    case 10:
      s10++;
      break;
    case 11:
      s11++;
      break;
    case 12:
      s12++;
      break;
    default:
      break;
  }

}

 veces= [ "cantidad de veces que la suma fue = 2 : " + s2,"cantidad de veces que la suma fue = 3 : "+ s3, "cantidad de veces que la suma fue = 4 : " + s4,"cantidad de veces que la suma fue = 5 : " + s5,"cantidad de veces que la suma fue = 6 : " + s6,"cantidad de veces que la suma fue = 7 : " + s7,"cantidad de veces que la suma fue = 8 : " + s8,"cantidad de veces que la suma fue = 9 : " + s9,"cantidad de veces que la suma fue = 10 : " + s10,"cantidad de veces que la suma fue = 11 : " + s11,"cantidad de veces que la suma fue = 12 : " + s12, ]
 veces.map(function (res){
    document.write(` - ${res}<br>`)
})