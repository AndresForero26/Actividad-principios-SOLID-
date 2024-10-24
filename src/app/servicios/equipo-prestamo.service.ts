// equipo-prestamo.service.ts
// Cumple con DIP al depender de la abstracción (interface) y no de una clase concreta.

import { Injectable } from '@angular/core';
import { EquipoPrestamo } from '../interfaces/equipo-prestamo';
import { EquipoService } from './equipo.service';

@Injectable({
  providedIn: 'root',
})
export class EquipoPrestamoService implements EquipoPrestamo {
  constructor(private equipoService: EquipoService) {}

  // Método para prestar un equipo cambiando su estado
  prestarEquipo(id: number) {
    this.equipoService.cambiarEstadoEquipo(id, 'prestado');
  }

  // Método para devolver un equipo cambiando su estado
  devolverEquipo(id: number) {
    this.equipoService.cambiarEstadoEquipo(id, 'disponible');
  }
}
