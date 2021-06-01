let persona ={
    nombre:'Gabriela Beatriz Navarro',
    edad: 30,
    dni: 35391522,
    domicilio:'Barrio Las Palmas L12 Sur',
    profesion: 'Estudiante',
    saludar: function (){
        console.log(`Hola, mi nombre es ${this.nombre}`)
    },
    listar: function (){
        for (let prop in persona) {
            console.log(`Mi ${prop} es: ${persona[prop]}`)
        }

    } 

}

let peliculas= [
    {titulo: 'Avengers: Endgame(Los Vengadores:Endgame)', genero: 'Ciencia Ficción', anio: 2018, sinopsis:'El grave curso de los acontecimientos puesto en marcha por Thanos que destruyó la mitad del universo gracias al las Gemas del Infinito. Ha provocado que los Vengadores restantes deban tomar una última posición en la gran conclusión de Marvel Studios a veintidós películas'},
    {titulo: 'Unbreakable (El protegido)', genero: 'Suspenso', anio: 2000, sinopsis:'David Dunn es el único sobreviviente de un terrible accidente ferroviario. El misterioso Elijah Price ofrece a David una extraña explicación sobre su salvación, un motivo que amenaza con cambiar su vida y a su familia para siempre'},
    {titulo: 'Split (Fragmentado)', genero: 'Suspenso', anio: 2016, sinopsis:'Kevin, un hombre con 23 personalidades, secuestra a 3 chicas jóvenes y las mantiene retenidas en un sótano. A medida que una de sus personalidades va imponiéndose al resto, la vida de las chicas, y la del propio Kevin, peligra cada vez más.'},
    {titulo: 'Glass ', genero: 'Ciencia Ficción', anio: 2019, sinopsis:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas. Su enfrentamiento épico los lleva a un encuentro con el misterioso Elijah Price, el cerebro criminal que guarda secretos críticos para ambos hombres.'},
    {titulo: 'Twelve Monkeys (Doce Monos)', genero: 'Ciencia Ficción', anio: 1995, sinopsis:'Un presidiario del futuro es enviado a principios del siglo XXI para que investigue el origen de una plaga que diezmará el género humano.'},
]

function mostrarInfo(){
    document.write("<h1> Películas </h1>")
    peliculas.forEach(function (pelicula) {
        document.write(`<b>-Titulo:</b> ${pelicula.titulo} <br> <b>-Año:</b>  ${pelicula.anio} <br> <b>-Género:</b>  ${pelicula.genero} <br> <b>-Sinópsis:</b><br>  ${pelicula.sinopsis} <br>`);
        document.write("<hr>");
      });
     
}