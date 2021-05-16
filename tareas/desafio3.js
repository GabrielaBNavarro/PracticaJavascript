//Realiza un script que cuente el número de vocales que tiene un texto y las muestre en pantalla.
let cantVocales = 0;
let texto = prompt("Ingrese una palabra o frase");
let vocales =[]
if (texto!== null){
    texto = texto.toUpperCase()
for (let i = 0; i < texto.length; i++) {
  console.log(texto);
  if (
    texto.charAt(i) === 'A' ||
    texto.charAt(i) === 'E' ||
    texto.charAt(i) === 'I' ||
    texto.charAt(i) === 'O' ||
    texto.charAt(i) === 'U'
  ) {
    vocales.push(texto.charAt(i))
    cantVocales++;
  }
}

console.log(`El texto posee ${cantVocales} vocales. Ellas son ${vocales.join('-')}`);
} else { 
    console.error("Operación cancelada")
}