class Banco {
    constructor() {
        this.clientes = [
            { id: '123456', pin: '1111', cuenta: { saldo: 500000 } },
            { id: '654321', pin: '2222', cuenta: { saldo: 750000 } },
            { id: '112233', pin: '3333', cuenta: { saldo: 250000 } }
        ]; 
    }

    validarCliente(id, pin) {
        return this.clientes.find(cliente => cliente.id === id && cliente.pin === pin);
    }

    obtenerSaldo(id) {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        return cliente ? cliente.cuenta.saldo : null;
    }

    depositar(id, monto, tipo) {
        const cliente = this.clientes.find(cliente => cliente.id === id);
        if (tipo === 'efectivo') {
            cliente.cuenta.saldo += monto;
        } else if (tipo === 'cheque') {
            console.log("Depósito de cheque procesado.");
            cliente.cuenta.saldo += monto;
        } else {
            console.log("Tipo de depósito no válido.");
        } 
    }

    transferir(idOrigen, idDestino, monto) {
        const clienteOrigen = this.clientes.find(cliente => cliente.id === idOrigen);
        const clienteDestino = this.clientes.find(cliente => cliente.id === idDestino);
        if (clienteOrigen && clienteDestino && clienteOrigen.cuenta.saldo >= monto) {
            clienteOrigen.cuenta.saldo -= monto;
            clienteDestino.cuenta.saldo += monto;
            console.log(`Transferencia de ${monto} de ${idOrigen} a ${idDestino} exitosa.`);
        } else {
            console.log("Transferencia fallida. Verifique saldos o IDs de usuario.");
        }
    }
}

class Cajero {
    constructor() {
        this.banco = new Banco();
        this.clienteActual = null;
        this.intentosPIN = 0;
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        console.log("Cajero encendido.");
    }

    apagar() {
        this.encendido = false;
        this.clienteActual = null;
        this.intentosPIN = 0;
        console.log("Cajero apagado.");
    }

    insertarTarjeta(id, pin) {
        if (!this.encendido) {
            console.log("El cajero está apagado.");
            return;
        }

        this.clienteActual = this.banco.validarCliente(id, pin);
        if (this.clienteActual) {
            console.log("Cliente autenticado exitosamente.");
            this.intentosPIN = 0;
        } else {
            this.intentosPIN++;
            console.log("PIN incorrecto. Intento:", this.intentosPIN);
            if (this.intentosPIN >= 3) {
                console.log("Demasiados intentos fallidos. Tarjeta bloqueada.");
                this.clienteActual = null;
                this.intentosPIN = 0;
            }
        }
    }

    retirar(monto) {
        if (!this.clienteActual) {
            console.log("Primero debe autenticarse.");
            return;
        }

        const saldo = this.banco.obtenerSaldo(this.clienteActual.id);
        if (saldo >= monto) {
            this.banco.depositar(this.clienteActual.id, -monto, 'efectivo');
            console.log(`Retiro exitoso. Puede tomar ${monto} de la bandeja principal.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    depositar(monto, tipo) {
        if (!this.clienteActual) {
            console.log("Primero debe autenticarse.");
            return;
        }

        this.banco.depositar(this.clienteActual.id, monto, tipo);
        console.log(`Depósito de ${monto} en ${tipo} exitoso.`);
    }

    transferir(idDestino, monto) {
        if (!this.clienteActual) {
            console.log("Primero debe autenticarse.");
            return;
        }

        this.banco.transferir(this.clienteActual.id, idDestino, monto);
    }

    consultarSaldo() {
        if (!this.clienteActual) {
            console.log("Primero debe autenticarse.");
            return;
        }

        const saldo = this.banco.obtenerSaldo(this.clienteActual.id);
        console.log(`El saldo de su cuenta es ${saldo}.`);
    }
}



let cajero = new Cajero();
cajero.encender();
cajero.insertarTarjeta('123456', '1111');
cajero.consultarSaldo();
cajero.retirar(50000);
cajero.depositar(100000, 'cheque');
cajero.transferir('654321', 50000);
cajero.apagar();
