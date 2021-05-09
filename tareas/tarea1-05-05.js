//Tarea 1
numero1 = parseInt(prompt('Ingrese el primer número'))
numero2 = parseInt(prompt('Ingrese el segundo número'))

if(numero1 > numero2){
    console.log(`El primer número es mayor que el segundo, la suma de ambos es igual a ${numero1+numero2}`)
}else if(numero1<numero2){
    console.log(`El primer número es menor que el segundo, la resta de ${numero2} menos ${numero1} es igual a ${numero2 - numero1}`)
}else{
    console.log(`Ambos números son iguales, el producto de ambos es igual a ${numero2*numero1}`)
}


