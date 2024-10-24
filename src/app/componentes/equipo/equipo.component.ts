import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../servicios/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
})
export class EquipoComponent implements OnInit {
  equipos: Equipo[] = []; // Propiedad pública para almacenar los equipos

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.listarEquipos(); // Cargamos la lista de equipos cuando se inicializa el componente
  }

  listarEquipos() {
    this.equipos = this.equipoService.obtenerEquipos(); // Asignamos la lista de equipos a la propiedad pública
  }
}
