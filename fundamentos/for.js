//for
for(let i=0; i<=10; i++){
console.log(i)
}


//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla
let tabla = parseInt(prompt("Ingrese el número de la tabla que quiere calcular"))

// if(isNaN(tabla)){
//     console.error('El valor ingresado no es un número')
// }else{
//     for(let i=1; i<=10; i++){
//         console.log(`${tabla} x ${i} = ${tabla * i}`)
//     }
// }


while(isNaN(tabla) == false){
    
    for(let i=1; i<=10; i++){
        console.log(`${tabla} x ${i} = ${tabla * i}`)
    }

    tabla = parseInt(prompt("Ingrese el número de la tabla que quiere calcular"))
}