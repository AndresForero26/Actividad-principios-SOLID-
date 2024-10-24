// equipo-prestamo.ts
// Interface para manejar el préstamo y devolución de equipos.

export interface EquipoPrestamo {
  prestarEquipo(id: number): void;
  devolverEquipo(id: number): void;
}
