import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importar ambos módulos
import { DatosGeneralesPageRoutingModule } from './datos-generales-routing.module';

import { DatosGeneralesPage } from './datos-generales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosGeneralesPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [DatosGeneralesPage]
})
export class DatosGeneralesPageModule { }