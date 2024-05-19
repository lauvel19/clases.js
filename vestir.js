class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadEnBodega, cantidadMinima, cantidadMaxima, descuento) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidadEnBodega = cantidadEnBodega;
        this.cantidadMinima = cantidadMinima;
        this.cantidadMaxima = cantidadMaxima;
        this.descuento = descuento;
    } 

    solicitarPedido() {
        return this.cantidadEnBodega > this.cantidadMinima;
    }

    calcularTotalAPagar(unidadesCompra) {
        return unidadesCompra * this.precioCompra;
    }
}

class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadEnBodega, cantidadMinima, cantidadMaxima, descuento, talla, permitePlanchado) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadEnBodega, cantidadMinima, cantidadMaxima, descuento);
        this.talla = talla;
        this.permitePlanchado = permitePlanchado;
    }
}

class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadEnBodega, cantidadMinima, cantidadMaxima, descuento, talla) {
        super(codigo, descripcion, precioCompra, precioVenta, cantidadEnBodega, cantidadMinima, cantidadMaxima, descuento);
        this.talla = talla;
    }
}

const blusa = new PrendaVestir('BL001', 'Blusa de algodón', 20, 40, 50, 10, 100, 0.1, 'M', true);
const jeans = new PrendaVestir('JN002', 'Jeans ajustados', 30, 60, 30, 5, 50, 0.05, 'L', false);

const tenis = new Calzado('TN101', 'Tenis deportivos', 50, 80, 40, 8, 60, 0.15, 38);
const sandalias = new Calzado('SD202', 'Sandalias de playa', 25, 45, 20, 3, 30, 0.08, 37);

const prendasDeVestir = [blusa, jeans];
const calzado = [tenis, sandalias];

console.log(blusa);