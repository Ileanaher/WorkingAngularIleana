import { Component, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
 public nombre:string='';
 public personas: Persona[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  public agregar(){
let objPersona:Persona={
  id:0,
  nombre:this.nombre,
  title:'',
  bio:""

}
 
this.personas.push(objPersona)
  }
}
