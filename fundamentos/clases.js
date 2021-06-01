//clases
class Persona{
constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
saludar(){
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
}

}

let persona1 = new Persona("Fabrizzio", "Tonin");
let persona2 = new Persona("Carlos", "Rodriguez");

class Profesor extends Persona {
   constructor(nombre, apellido,materia){
  super(nombre, apellido);
    this.materia = materia
}
presentacion(){
    console.log(`Buen día, juntos aprenderemos ${this.materia}`);

}
}
let profe1 = new Profesor("Fabrizzio", "Tonin", "React Native");
