var articulos = [
   { nombre: "Bici", costo : 3000 },
   { nombre: "TV", costo : 2500 },
   { nombre: "Libro", costo : 80 },
   { nombre: "Celular", costo : 1000 },
   { nombre: "Laptop", costo : 1200 },
   { nombre: "Teclado", costo : 65 },
   { nombre: "Audifonos", costo : 100 }
];

// Filtrar     Filter -  Devuelve todos los elementos del array que cumplan con la condición dada
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 1000;
});

articulosFiltrados;

// Map, ayuda a mapear ciertos articulos. Genera un nuevo array
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
});

nombreArticulos;

// Find     Devuelve el primer elemento del array que cumpla con la condición dada
var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop";
});

encuentraArticulo;

// Foreach - Ejecuta lo que le definamos una vez por cada elemento de nuestro array
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

// Some - Comprueba si al menos un elemento del array cumple con la condición que le damos (devuelve true o false)
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 500;
});

articulosBaratos;