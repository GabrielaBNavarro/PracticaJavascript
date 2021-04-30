let nombre = prompt("Ingrese el nombre a capitalizar")
nombreCap = nombre.charAt(0).toUpperCase() + nombre.substr(1,nombre.length-1)
alert(`El nombre capitalizado es ${nombreCap} `)
document.write("Saludos humano! \u{1F913} <br>" ) 
document.write(`El nombre capitalizado es ${nombreCap} <br>`)

let numero1 = prompt("Ingrese el primer número")
let numero2 = prompt("Ingrese el segundo número")
let numero3 = prompt("Ingrese el tercer número")
document.write(`Numero 1 = ${numero1} <br> ` )
document.write(`Numero 2 = ${numero2} <br>` )
document.write(`Numero 3 = ${numero3} <br>` )
 let mayor = Math.max(numero1,numero2,numero3)

 alert( `El mayor es ${mayor} \u{1F3C6}`)
 document.write(`El mayor es ${mayor} \u{1F3C6} <br>`)

 let menor = Math.min(numero1,numero2,numero3)

 alert( `El menor es ${menor} \u{1F949}`)
 document.write(`El menor es ${menor} \u{1F949} <br>`)

 let raiz= Math.sqrt(numero2)

 alert( `La raíz cuadrada de ${numero2} es ${raiz}`)
 document.write(`La raíz cuadrada de ${numero2} es ${raiz} <br>`)

