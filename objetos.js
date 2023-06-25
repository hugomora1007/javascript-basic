var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022
};

miAuto;

miAuto.marca;

miAuto.anio;

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.anio}`);
    }
};

miAuto.detalleDelAuto();