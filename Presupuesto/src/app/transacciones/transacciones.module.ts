import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './actividades/actividades.component';
import { RouterModule, Routes } from '@angular/router';
import { GastoService } from '../gastos/service/gasto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:'', component:ActividadesComponent
  },
  {
    //ruta por defecto
    path:'**', redirectTo:'actividades'
  }
  

]


@NgModule({
  declarations: [
    ActividadesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[

    GastoService
  ]
})
export class TransaccionesModule { }
