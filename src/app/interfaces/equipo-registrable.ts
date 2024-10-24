// equipo-registrable.ts
// Importamos la clase Equipo desde el servicio correspondiente
import { Equipo } from '../servicios/equipo.service';

// Interface dedicada únicamente a la responsabilidad de registrar equipos.
export interface EquipoRegistrable {
  registrarEquipo(equipo: Equipo): void;
}
