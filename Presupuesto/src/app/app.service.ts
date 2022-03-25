import { Injectable } from '@angular/core';
import { Transaccion } from './models/Transaccion';

@Injectable({
  providedIn: 'root'
})
export class AppService {

public transacciones:Transaccion[]=[];

  constructor() { } 

  public addTransaccion(tran:Transaccion){

    this.transacciones.push(tran);
    
  }
  public deleteTransaccion(tran:Transaccion){

      let arrIndex= this.transacciones.indexOf(tran);
      
      if ( arrIndex !== -1 ) {
      this.transacciones.splice( arrIndex, 1 );
      
      }
  }

  public getListadoTransacciones()
  {
    return this.transacciones;
  }
}
