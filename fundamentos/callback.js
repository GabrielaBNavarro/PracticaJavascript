//callbacks
let numeros = [12,24,2,5,6,37];
let numerosOrdenados = numeros.sort(function (a,b){
    console.log(a)
    return a - b;
});
//filter
let pares = numeros.filter(function (num){
    return num % 2 === 0;
})

//find
let alumnos = ['Lucas','Pablo','Fabrizio', "Jorge"];
alumnos.find(function (alumno){
    return alumno === "Lucas"
})
//map
let numerosDobles = numeros.map(function (num){
    return num *2;
})
console.log(numerosDobles)