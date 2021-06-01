//funciones constructotras
//plantilla para crear varios objetos
//propiedades
//métodos

function Movies(titulo, sinopsis, director, reparto){
    this.titulo = titulo;
    this.sinopsis = sinopsis;
    this.director = director;
    this.reparto = reparto;
}

Movies.prototype.listar = function(){
    console.log("Título: ", this.titulo);
    console.log("Sinópsis: ", this.sinopsis);
    console.log("Director: ", this.director);
    console.log("Reparto: ", this.reparto);
    console.log("===================================");
}
let jurassic = new Movies(
    "Jurassic Park",
    "Dinosaurios que se escapan y atacan personas",
    "Steven Spielberg",
    "Carlos, Herminia,José, Alberto"

);

