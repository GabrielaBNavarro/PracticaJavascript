valor1 = parseInt(prompt("Ingrese el primer número"));
valor2 = parseInt(prompt("Ingrese el segundo número"));
operacion = prompt("Ingrese la operacion a realizar. Operadores válidos: suma: + , resta: - multiplicación: *, división: /");

if (isNaN(valor1)) {
  console.log(
    `El primer valor ingresado no es un número, se cambiará el valor a 0`
  );
  valor1 = 0;
  console.log(`Primer número = ${valor1}`);
}
if (isNaN(valor2)) {
  console.log(
    `El segundo valor ingresado no es un número, se cambiará el valor a 0`
  );
  valor2 = 0;
  console.log(`Segundo número = ${valor2}`);
}
switch (operacion) {
  case "+":
    console.log(
      `La suma de ${valor1} más ${valor2} es igual a ${valor1 + valor2}`
    );
    break;
  case "-":
    console.log(
      `La resta de ${valor1} menos ${valor2} es igual a ${valor1 - valor2}`
    );
    break;
  case "*":
    console.log(
      `El producto entre ${valor1} y ${valor2} es igual a ${valor1 * valor2}`
    );
    break;
  case "/":
    if (valor2 !== 0) {
      console.log(
        `El cociente entre ${valor1} y ${valor2} es igual a ${valor1 / valor2}`
      );
    } else {
      console.error("No se puede dividir por cero");
    }
    break;
  default:
    console.error("Operación no definida");
    break;
}
