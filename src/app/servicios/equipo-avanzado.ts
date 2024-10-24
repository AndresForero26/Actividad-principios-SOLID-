// equipo-avanzado.ts
// Esta clase extiende la clase Equipo sin modificarla, respetando el principio Open/Closed.

import { Equipo } from './equipo.service';

export class EquipoAvanzado extends Equipo {
  constructor(
    id: number,
    nombre: string,
    estado: string,
    public funciones: string[]
  ) {
    super(id, nombre, estado);
  }
}
