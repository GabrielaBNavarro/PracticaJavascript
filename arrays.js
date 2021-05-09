//Arrays
let alumnos = ['Pablo', 'Fabricio', 'Laura', 'Gabriela']
//para mostrar el elemento de una determinada posicion
alumnos[2]
//para mostrar el último elemanto del array
alumnos[alumnos.length - 1]
//para concatenar todos los elementos en un string
alumnos.join()
// para separarlos con algo diferente a una coma, coloco el símbolo dentro del parentesis del join
//para iterar o recorrer un arreglo
for (let i=0; i<alumnos.length; i++){
    console.log(`Hola soy ${alumnos[i]}`)
}
//agregar elementos al final
alumnos.push('Jorge')

//Eliminar último elemento
alumnos.pop()

//Añadir un elemento al principio
alumnos.unshift('Walter')

//Eliminar el primer elemento
alumnos.shift()
//Encontrar el índice de un elemento
console.log(alumnos.indexOf('Pablo'))
//Encontrar un elemento
console.log(alumnos.includes('Gabriela'))
//Eliminar un elemento mediante posicion
let pos= 1
alumnos.splice(pos,1)
