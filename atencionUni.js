class AtencionUniversidad {
    constructor() {
        this.modulos = {
            terminal: { estudiantes: 0, docentes: 0 },
            oficina: { estudiantes: 0, docentes: 0 }
        };
        this.transferencias = 0;
    }

    atenderUsuario(modulo, segmento) {
        this.modulos[modulo][segmento]++; 
    }

    transferirUsuario(moduloOrigen, moduloDestino, segmento) {
        if (this.modulos[moduloOrigen][segmento] > 0) {
            this.modulos[moduloOrigen][segmento]--;
            this.modulos[moduloDestino][segmento]++;
            this.transferencias++;
        }
    }

    estadisticas() {
        return {
            modulos: this.modulos,
            transferencias: this.transferencias
        };
    }
}


let atencion = new AtencionUniversidad();
atencion.atenderUsuario('terminal', 'docentes');
atencion.atenderUsuario('oficina', 'docentes');
atencion.transferirUsuario('terminal', 'oficina', 'estudiantes');
console.log(atencion.estadisticas());