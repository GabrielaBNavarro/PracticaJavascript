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

listarAlumnos(alumnos,tarjeta);

