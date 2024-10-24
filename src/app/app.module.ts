import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Necesario para el binding con ngModel

import { AppComponent } from './app.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';  // Importar componente de equipo
import { PrestamosComponent } from './componentes/prestamos/prestamos.component';  // Importar componente de préstamos

import { EquipoService } from './servicios/equipo.service';  // Importar el servicio de equipo
import { EquipoPrestamoService } from './servicios/equipo-prestamo.service';  // Importar el servicio de préstamo de equipo

@NgModule({
  declarations: [
    AppComponent,         // Declarar el componente raíz
    EquipoComponent,      // Declarar el componente para equipos
    PrestamosComponent    // Declarar el componente para gestión de préstamos
  ],
  imports: [
    BrowserModule,        // Módulo básico para todas las aplicaciones Angular que se ejecutan en el navegador
    FormsModule           // Módulo necesario para trabajar con formularios y ngModel
  ],
  providers: [
    EquipoService,        // Registrar el servicio de equipos
    EquipoPrestamoService // Registrar el servicio de préstamo de equipos
  ],
  bootstrap: [AppComponent] // Definir el componente raíz que se renderizará al iniciar la aplicación
})
export class AppModule { }
