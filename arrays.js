var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length);

console.log(frutas[0]);

var masFrutas = frutas.push("Uvas"); // agrega un elemento al final del array

var ultimo = frutas.pop("Uvas"); // eilimina el ultimo elemento del array

var nuevaLongitud = frutas.unshift("Naranja"); // agrega un elemento al inicio del array

var borrarFruta = frutas.shift("Naranja"); // elimina la primera fruta

var posicion = frutas.indexOf("Cereza");

// Sploce - Sirve para eliminar un arreglo según su índice
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']
articulos;

// también con este método se pueden modificar elementos de un arreglo según su índice
var articulos2 = ['carro', 'celular', 'moto', 'tv', 'libro']; //modificar moto

articulos2.splice(2, 1, 'laptop'); /*se aplican los mismo parámetros, pero esta vez se le agrega el valor al que queremos modificar*/
//['carro', 'celular', 'laptop', 'tv', 'libro']

articulos2;