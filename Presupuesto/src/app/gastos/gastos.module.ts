import { NgModule, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoComponent } from './gasto/gasto.component';
import { RouterModule, Routes } from '@angular/router';
import { GastoService } from './service/gasto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
 

const routes:Routes=[
  {
    path:'', component:GastoComponent
  }

]

@NgModule({
  declarations: [
    GastoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GastoService
  ],
})
export class GastosModule { }
