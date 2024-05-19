class Habitacion {
    constructor(tipo, capacidad, fumador) {
        this.tipo = tipo;
        this.capacidad = capacidad;
        this.fumador = fumador;
        this.reservas = [];
    }

    agregarReserva(reserva) {
        if (this.reservas.length < this.capacidad) {
            this.reservas.push(reserva);
            console.log("Reserva realizada con éxito.");
        } else {
            console.log("No hay disponibilidad en esta habitación.");
        }
    }
}

class Hotel {
    constructor() {
        this.habitaciones = {
            individual: new Habitacion("individual", 2, false),
            doble: new Habitacion("doble", 4, false),
            familiar: new Habitacion("familiar", 6, false)
        };
        this.estadisticas = {
            reservas: [],
            totalPersonas: 0,
            totalMascotas: 0
        };
    }

    hacerReserva(nombre, pais, tipoHabitacion, fumador, periodo, personas, mascota) {
        let habitacion = this.habitaciones[tipoHabitacion];
        if (!habitacion) {
            console.log("Tipo de habitación no válido.");
            return;
        }

        if (personas > habitacion.capacidad) {
            console.log("El número de personas excede la capacidad de la habitación.");
            return;
        }

        if (tipoHabitacion === "familiar" && !mascota) {
            console.log("Las mascotas solo se aceptan en habitaciones familiares.");
            return;
        }

        let reserva = { nombre, pais, tipoHabitacion, fumador, periodo, personas, mascota };
        habitacion.agregarReserva(reserva);
        this.estadisticas.reservas.push(reserva);
        this.estadisticas.totalPersonas += personas;
        if (mascota) {
            this.estadisticas.totalMascotas++;
        }
    }

    mostrarEstadisticas() {
        console.log("Estadísticas del Hotel:");
        console.log("Total de reservas:", this.estadisticas.reservas.length);
        console.log("Total de personas:", this.estadisticas.totalPersonas);
        console.log("Total de mascotas:", this.estadisticas.totalMascotas);
    }
}


let hotel = new Hotel();
hotel.hacerReserva("Juan", "España", "individual", false, "01/06/2024 - 05/06/2024", 1, false);
hotel.hacerReserva("María", "Argentina", "familiar", false, "10/06/2024 - 15/06/2024", 4, true);
hotel.hacerReserva("Pedro", "México", "doble", true, "20/06/2024 - 25/06/2024", 2, false);

hotel.mostrarEstadisticas();
