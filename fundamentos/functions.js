//funciones declarativas
function miFuncion() {
  console.log("Hola Mundo");
}

let num1 = 34;
let num2 = 56;

function resta(parametro1, parametro2) {
  console.log(num2 - num1);
}

function calculadora(num1 = 0, num2 = 0, operacion = "+") {
  if (!num1 || !num2) {
    return "Falta el valor";
  }

  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;

    default:
      return "Operación inválida";
  }
}

function cubo(num){
    return Math.pow(num ,3);
}

let numeros =[23,45,2,67]

function converCubo(array, funcion){
    let numerosAlCubo=[]
    for (let numero of array) {
        numerosAlCubo.push(funcion(numero))
        
    }
    return numerosAlCubo
}

// let resultado = converCubo(numeros,cubo)
// console.log(resultado)

//scope
let heroe = "Superman"
 function saludarHeroe (){
     let heroe = "Batman"
     console.log(`Bienvenido ${heroe}`)
 }
 