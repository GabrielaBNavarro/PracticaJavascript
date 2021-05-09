//Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión " - ".

let frase = prompt('Ingrese una palabra o frase, para salir presione "Cancelar"')
let cadenas =[]
if(frase == null){
    console.error('Usted no ha ingresado texto')
}else{
while(frase !== null){
 cadenas.push(frase)
 frase = prompt('Ingrese una palabra')
}

console.log(`El texto ingresado es: ${cadenas.join('-')}`)}