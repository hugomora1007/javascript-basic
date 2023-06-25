function auto(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);


// Crear 5 vehiculos con objetos
var totalVehiculos = 5;
var autos = [];

for (var i = 0; i < totalVehiculos; i++) {
    var marca = prompt("Ingresar marca vehiculo");
    var modelo = prompt("Ingresar modelo vehiculo");
    var anio = prompt("Ingresar anio vehiculo");

    var autoIngresado = new auto(marca, modelo, anio);
    autos.push(autoIngresado);
}

autos;