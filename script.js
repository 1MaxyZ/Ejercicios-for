/*Ejercicio 1: Imprimir números pares
Mostra todos los números pares del 1 al 20 utilizando un bucle for.*/
// CODIGO
console.log("Ejercicio 1:Mostrar numeros pares");
for (let i=2; i<=20; i+=2) {
  console.log("numero par: " + i);
}


/*Ejercicio 2: Sumar números del 1 al 50
Calcula la suma de todos los números del 1 al 50 utilizando un bucle for.*/
// CODIGO
console.log("Ejercicio 2:Sumar numeros del 1 al 50");
for (let i=1; i<=50; i++) {
    console.log(i);
}


/*Ejercicio 3: Imprimir elementos de un arreglo
Dado un arreglo de nombres, utiliza un bucle for para imprimir cada nombre en una línea separada.*/
// CODIGO
console.log("Ejercicio 3:Imprimir elementos de un arreglo");
let miArreglo = ["Feliz","Cumple","Profe","Lucio","Luchito","Jorge","trae","laTorta"];
console.log(miArreglo);
for (let i=0; i<miArreglo.length; i++) {
  console.log(miArreglo[i])
}


/*Ejercicio 4: Tabla de multiplicar
Ingresa un número y utiliza un bucle for para imprimir la tabla de multiplicar del 1 al 10 para ese número.*/
// CODIGO
console.log("Ejercicio 4:Tabla de multiplicar");
//(si quitas el prompt() podes colocar el numero a multiplicar acá)
let numero = prompt("(Ejecicio 3) Ingresa un numero a multiplicar:");
console.log("tu numero es "+numero);
let num = numero
for (let i=1; i<=10; i++) {
numero = num*i
console.log("multiplicado por "+i+" = "+numero)
}


/*Ejercicio 5: Contar letras en un string
Cuenta cuántas veces aparece una letra específica en una cadena utilizando un bucle for.*/
// CODIGO
console.log("Ejercicio 5. Contar letras en un string")
//(si quitas el prompt(...) podes colocar el texto y la letra a buscar acá)
let cadena = prompt("(Ejercicio 5) Escribe un texto");
let letraBuscada = prompt("(Ejercicio 5) Escribe la letra que deseas contar");

  let contador = 0;
  for (let i=0; i<cadena.length; i++) {
    if (cadena[i] === letraBuscada) {
      contador++;
    }
  }
console.log("La letra "+letraBuscada+" aparece "+contador+" veces en la cadena.");


/*Ejercicio 6: Traducir este codigo para que funcione solo con ciclos For:*/
console.log("(Ejercicio 6) Traducior este codigo con ciclos for")

// const numeros = [2, 3, 5, 7, 10];
// let sumaCuadrados = 0;
// let i = 0;
// while (i < numeros.length) {
//   sumaCuadrados += numeros[i] * numeros[i];
//   i++;
// }
// console.log("La suma de los cuadrados es:", sumaCuadrados);

//CODIGO
const numeros = [2, 3, 5, 7, 10];
let sumaCuadrados = 0;
for (let i=0; i<numeros.length; i++) {
  sumaCuadrados += numeros[i] * numeros[i];
}
console.log("La suma de los cuadrados es:", sumaCuadrados);