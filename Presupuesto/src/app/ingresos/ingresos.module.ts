import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RouterModule, Routes } from '@angular/router';
import { IngresoService } from './service/ingreso.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:'', component:IngresoComponent
  }

]

@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
  IngresoService
  ]
})
export class IngresosModule { }
