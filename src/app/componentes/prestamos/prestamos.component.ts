import { Component } from '@angular/core';
import { EquipoPrestamoService } from '../../servicios/equipo-prestamo.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
})
export class PrestamosComponent {
  equipoId: number | null = null; // Almacenamos el ID del equipo

  constructor(private equipoPrestamoService: EquipoPrestamoService) {}

  prestarEquipo(id: number | null) {
    if (id !== null) {
      this.equipoPrestamoService.prestarEquipo(id);
      console.log(`Equipo con ID ${id} prestado.`);
    }
  }

  devolverEquipo(id: number | null) {
    if (id !== null) {
      this.equipoPrestamoService.devolverEquipo(id);
      console.log(`Equipo con ID ${id} devuelto.`);
    }
  }
}
