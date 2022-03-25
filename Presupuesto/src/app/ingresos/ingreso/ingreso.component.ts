import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/Transaccion';
import { IngresoService } from '../service/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(public iService:IngresoService) { }

  ngOnInit(): void {
  }
  AgregarIngreso(){
    this.iService.guardarIngreso();
  
    }
    EliminarIngreso(transa: Transaccion){
      this.iService.eliminarIngreso(transa);
    
      }
}
