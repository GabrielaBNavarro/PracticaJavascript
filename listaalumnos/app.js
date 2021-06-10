let alumnos =[
    "Pablo Marino",
  "Fabrizio Tonin",
  "Laura Bono",
  "Carlos Sosa",
  "José Gonzalez",
  "Alberto Perez",
];

let tarjeta = document.querySelector('.card-body');

let tarjetaOrdena = document.querySelector('#card-ordenar');

function listarAlumnos(array, contenedor){
    array.forEach(function(alumno) {
        let parrafo = document.createElement('p')
        parrafo.innerText = alumno
        return contenedor.appendChild(parrafo)
    });
}

//obtener nombre y apellido. Listar con el apellido y el nombre
function intercalarNombre(lista){
    let newList= lista.map(function(item){
        let espacio = item.indexOf(" ");
        let nombre = item.slice(0,espacio);
        let apellido =item.slice(espacio+1,item.length)
        return `${apellido} ${nombre}`
    })
    return newList;
}

// function ordenarAlumnos(){
//     limpiarLista()
//     let alumnosOrdenados=intercalarNombre(alumnos).sort();
//     listarAlumnos(alumnosOrdenados,tarjetaOrdena);
// }
// function ordenarAlumnosZ(){
//     limpiarLista()
//     let alumnosOrdenados=intercalarNombre(alumnos).sort().reverse();
//     listarAlumnos(alumnosOrdenados,tarjetaOrdena);}

function ordenarLista(orden){
    limpiarLista()
    let alumnosOrdenados=[];
    if(orden == "az"){
         alumnosOrdenados=intercalarNombre(alumnos).sort();
    }
    if(orden == 'za'){
        alumnosOrdenados=intercalarNombre(alumnos).sort().reverse();
    }

    listarAlumnos(alumnosOrdenados,tarjetaOrdena);

}
function limpiarLista(){
    tarjetaOrdena.innerHTML =""
}


listarAlumnos(alumnos,tarjeta);

