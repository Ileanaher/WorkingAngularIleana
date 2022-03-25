 
import { Component,OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/Transaccion';
 
import { GastoService } from '../service/gasto.service';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {
 
  
   
  constructor(public gservice:GastoService) { }
  
  ngOnInit(): void {
    
  }
  

  AgregarGasto(){
  this.gservice.guardarGasto();

  }
  EliminarGasto(transa: Transaccion){
    this.gservice.eliminarGasto(transa);
  
    }
 
}
