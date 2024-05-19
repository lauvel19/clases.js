class Producto {
    constructor(id, nombre, fecha, precioInicial) {
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.precioInicial = precioInicial;
        this.ofertas = [];
    }

    registrarOferta(persona, fecha, valorOfrecido) {
        this.ofertas.push({
            persona,
            fecha,
            valorOfrecido
        });
    }

    obtenerListaOfertas() {
        return this.ofertas;
    }

    seleccionarOfertaGanadora() {
        if (this.ofertas.length === 0) {
            console.log(`No hay ofertas para el producto ${this.nombre}.`);
            return;
        }

        const ofertaGanadora = this.ofertas.reduce((maxOferta, oferta) => {
            return oferta.valorOfrecido > maxOferta.valorOfrecido ? oferta : maxOferta;
        });

        console.log(`La oferta ganadora para el producto ${this.nombre} es de ${ofertaGanadora.valorOfrecido} por ${ofertaGanadora.persona}.`);
    }
}

const producto1 = new Producto(1, 'Reloj de lujo', '2024-05-20', 500);
producto1.registrarOferta('Juan', '2024-05-21', 600);
producto1.registrarOferta('María', '2024-05-22', 700);

console.log(producto1.obtenerListaOfertas());
producto1.seleccionarOfertaGanadora();
