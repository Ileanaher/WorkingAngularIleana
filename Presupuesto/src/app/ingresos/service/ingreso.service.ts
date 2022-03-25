import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Transaccion } from 'src/app/models/Transaccion';
import { transType, Types } from 'src/app/models/transType';

@Injectable()
export class IngresoService {

  public form:FormGroup;
public ListadoIngresos: Transaccion[] = [];

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
    
    
    public guardarIngreso()
     {
     
        if(this.form.valid)
        {
            const transType: transType={
                id:1,
                enum:Types.INCOME,
                description:"Ingreso",
                status:true
    
            }
            const tran: Transaccion={
                id:Math.random(),
                amount: this.form.get("monto")?.value,
                date:this.form.get("fecha")?.value,
                type:transType
    
            }
        
            this.agregarIngreso(tran);
            this.appService.addTransaccion(tran);
    
        }else{
            this.form.markAllAsTouched();
        }
    
    
     }
    
     private agregarIngreso(trans:Transaccion)
     {
        
        this.ListadoIngresos.push(trans);
     }
     public eliminarIngreso(trans:Transaccion)
     {
     
        this.appService.deleteTransaccion(trans);
        let arrIndex= this.ListadoIngresos.indexOf(trans);
         
        if ( arrIndex !== -1 ) {
         this.ListadoIngresos.splice( arrIndex, 1 );
       }
    
     }
    
  
}
