import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosGeneralesPage } from './datos-generales.page';

const routes: Routes = [
  {
    path: '',
    component: DatosGeneralesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosGeneralesPageRoutingModule {}
