//Redondear un numero mas bajo
console.log(Math.floor (45.89))
//Redondear numero arriba
console.log(Math.round(45.89))

//obtener el maximo de una lista de numeros
console.log(`El numero maximo es: ${Math.max(56.5,45,90,5,1000)}`)
console.log(`El numero mínimo es: ${Math.min(56.5,45,90,5,1000)}`)


let numero ="67.8765"
console.log(numero)
numero=parseInt(numero)
let decimal= "456.8987"
console.log(parseFloat(decimal))

//Elevar a potencia
let base=numero
let exponente = 3

console.log( `El numero ${base} elevado a la potencia ${exponente} es ${Math.pow(base,exponente)}`)

//calcular raiz cuadrada
console.log(Math.sqrt(64))
//numero aleatorio
console.log(Math.round(Math.random()*100 + 1))

//obtener un numero con dos decimales
decimal = parseFloat(decimal)
console.log(Math.round(decimal * 100) / 100)

//toFixed(2)
let decimalString = parseFloat(decimal.toFixed(2));
console.log(decimalString)