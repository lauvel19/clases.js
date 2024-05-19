class Cliente {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo; 
    }
}

class Caja {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo; 
        this.turnos = [];
    }

    asignarTurno(cliente) {
        this.turnos.push(cliente);
    }

    atenderSiguiente() {
        if (this.turnos.length === 0) {
            console.log(`La caja ${this.numero} está vacía.`);
            return;
        }

        const cliente = this.turnos.shift();
        console.log(`Atendiendo a ${cliente.nombre} en la caja ${this.numero}.`);
    }
}

const caja1 = new Caja(1, 'caja');
const caja2 = new Caja(2, 'caja');
const caja3 = new Caja(3, 'caja');
const caja4 = new Caja(4, 'caja');
const asesoria = new Caja(5, 'asesoría');

const cliente1 = new Cliente('Juan', 'preferencial');
const cliente2 = new Cliente('María', 'general');
const cliente3 = new Cliente('Carlos', 'sin cuenta');

caja1.asignarTurno(cliente1);
caja2.asignarTurno(cliente2);
caja3.asignarTurno(cliente3);

caja1.atenderSiguiente();
caja2.atenderSiguiente();
caja3.atenderSiguiente();

caja1.atenderSiguiente(); 
asesoria.atenderSiguiente(); 

