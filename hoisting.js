// Hoisting es cuando las variables y las funciones se procesan antes que se ejecute cualquier parte del codigo
console.log(miNombre);

var miNombre = "Hugo";

hey();

function hey() {
    console.log("Hola " + miNombre)
}