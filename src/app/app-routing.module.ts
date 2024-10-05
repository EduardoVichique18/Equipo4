import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'info-personal',
    loadChildren: () => import('./info-personal/info-personal.module').then(m => m.InfoPersonalPageModule)
  },
  {
    path: 'datos-generales',
    loadChildren: () => import('./datos-generales/datos-generales.module').then(m => m.DatosGeneralesPageModule)
  },
  {
    path: 'carrera',
    loadChildren: () => import('./carrera/carrera.module').then(m => m.CarreraPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then(m => m.AyudaPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then(m => m.CuentaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'api',
    loadChildren: () => import('./api/api.module').then( m => m.ApiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
