//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let numero1= prompt("Ingrese un número")
let total= 0
while(numero1 != null){
    numero1= parseInt(numero1)
    if (isNaN(numero1) == false){
        total = total + numero1
    }else{
        alert("Usted debe ingresar un número")
    }

     numero1= prompt("Ingrese un número")
}

console.log(`La suma total de los números ingresados es igual a ${total}`)