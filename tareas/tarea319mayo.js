/* 
**Tarea 3**
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a + b)*/

function perimetro() {
  let a = parseInt(prompt("Ingrese el valor del primer lado"));
  let b = parseInt(prompt("Ingrese el valor del segundo lado"));
  if(isNaN(a)== false && isNaN(b) == false) {
    let p = 2 * a + 2 * b;
  document.write(`El perímetro del rectángulo es: ${p}`);}
  else{
      alert("Ambos valores deben ser números")
      perimetro()
  }
}
perimetro();
