import { Injectable } from '@angular/core';

// equipo.service.ts
export class Equipo {
  constructor(
    public id: number,
    public nombre: string,
    public estado: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class EquipoService {
  // Lista de equipos con datos de ejemplo
  private equipos: Equipo[] = [
    new Equipo(1, 'Microscopio', 'disponible'),
    new Equipo(2, 'Cámara termográfica', 'prestado'),
    new Equipo(3, 'Multímetro digital', 'disponible'),
    new Equipo(4, 'Osciloscopio', 'en mantenimiento'),
    new Equipo(5, 'Generador de señales', 'disponible'),
  ];

  // Método para agregar un equipo a la lista
  agregarEquipo(equipo: Equipo) {
    this.equipos.push(equipo);
  }

  // Método para obtener la lista de equipos
  obtenerEquipos(): Equipo[] {
    return this.equipos;
  }

  // Método para cambiar el estado de un equipo
  cambiarEstadoEquipo(id: number, nuevoEstado: string) {
    const equipo = this.equipos.find((e) => e.id === id);
    if (equipo) {
      equipo.estado = nuevoEstado;
    }
  }
}
