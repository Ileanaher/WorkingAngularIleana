import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Transaccion } from 'src/app/models/Transaccion';
import { transType, Types } from 'src/app/models/transType';


@Injectable()
export class GastoService {

public form:FormGroup;
public ListadoGastos: Transaccion[] = [];

constructor(private formBuilder:FormBuilder, private appService:AppService) {

this.form=this.formBuilder.group({
monto:['',[Validators.required, Validators.min(100)]],
fecha:['',[Validators.required]]

});

 }
get monto(){
return this.form.get("monto")
} 
get fecha(){
    return this.form.get("fecha")
    } 


public guardarGasto()
 {
 
    if(this.form.valid)
    {
        const transType: transType={
            id:1,
            enum:Types.OUTCOME,
            description:"Gasto",
            status:true

        }
        const tran: Transaccion={
            id:Math.random(),
            amount: this.form.get("monto")?.value,
            date:this.form.get("fecha")?.value,
            type:transType

        }
    
        this.agregarGasto(tran);
        this.appService.addTransaccion(tran);

    }else{
        this.form.markAllAsTouched();
    }


 }

 public eliminarGasto(trans:Transaccion)
 {
 
    this.appService.deleteTransaccion(trans);
    let arrIndex= this.ListadoGastos.indexOf(trans);
     
    if ( arrIndex !== -1 ) {
     this.ListadoGastos.splice( arrIndex, 1 );
   }

 }
 private agregarGasto(trans:Transaccion)
 {
    
    this.ListadoGastos.push(trans);
 }

 
}
