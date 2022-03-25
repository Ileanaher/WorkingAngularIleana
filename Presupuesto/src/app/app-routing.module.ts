import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

const routes: Routes = [
  {
  path:'transacciones', loadChildren: ()=>import('./transacciones/transacciones.module').then(m=>m.TransaccionesModule)
  },
  {
    path:'gastos', loadChildren: ()=>import('./gastos/gastos.module').then(m=>m.GastosModule)
  },
  {
    path:'ingresos', loadChildren: ()=>import('./ingresos/ingresos.module').then(m=>m.IngresosModule)
  },
  {
    path:'tarjeta', component:TarjetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
