/*Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Las funciones serán:
aniadirContacto(Contacto): Añade un contacto a la agenda, si la agenda no puede almacenar mas contactos indicar por pantalla.
existeContacto(Conctacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.
Usar LocalStorage para guardar la info de la agenda y para consultar sus datos*/

let agenda = JSON.parse(localStorage.getItem("agenda")) ||[];
class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}
function aniadirContacto(nombre, telefono) {
  if (agenda.length<10){
    let encontrado = agenda.find(function (contacto) {
      return contacto.nombre.toUpperCase() == nombre.toUpperCase();
    });
    if (encontrado){
      console.warn('Ya existe un contacto con ese nombre en la agenda')
    }else{
  agenda.push(new Contacto(nombre, telefono));
  localStorage.setItem("agenda", JSON.stringify(agenda));
  }
  }else{
    console.warn('La agenda está llena')
  }
}
function listarContactos() {
  if (agenda.length>=1){
  agenda.forEach(function (contacto) {
    console.log(`Nombre: ${contacto.nombre}`);
    console.log(`Teléfono: ${contacto.telefono}`);
    console.log("=============================================");
  });
}else {
  console.warn('No hay contactos para mostrar')
}
}

function existeContacto(nombre) {
  let encontrado = agenda.find(function (contacto) {
    return contacto.nombre.toUpperCase() === nombre.toUpperCase();
  });

  if (encontrado) {
    console.warn(`Existe un contacto con ese nombre `);
    console.log("=========================");
  } else {
    console.log(`El contacto no existe`);
    
  }
}
function buscarContacto(nombre) {
    let encontrado = agenda.find(function (contacto) {
      return contacto.nombre.toUpperCase() == nombre.toUpperCase();
    });
  
    if (encontrado) {
      console.log(`El número telefónico de  "${encontrado.nombre}" es: ${encontrado.telefono}`);
      console.log("=========================");
    } else {
      console.warn(`El contacto no existe`);
    }
  }
  function eliminarContacto(nombre){
    let idContacto= agenda.findIndex(function(contacto){
      return contacto.nombre.toUpperCase() == nombre.toUpperCase();
    })
    
    if (idContacto>-1) {
      let validar = confirm('Está seguro que quiere eliminar el contacto?')
    
    if (validar){
      agenda.splice(idContacto,1)
      localStorage.setItem('agenda', JSON.stringify(agenda))
      console.log('El contacto ha sido borrado')
    } else {
      console.log('El contacto no existe')
    }
  }}

function agendaLlena(){
    if(agenda.length >= 10){
        console.warn('La agenda está llena')
           } else {
               console.log('aún hay lugar  en la agenda')
           }
}
function huecosLibres(){
    let huecos = 10 - agenda.length
    console.log(`Hay ${huecos} espacios libres en la agenda`)
}

function vaciarAgenda(){
  localStorage.clear()
}