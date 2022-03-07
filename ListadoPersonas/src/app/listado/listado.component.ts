import { Component, Input, OnInit } from '@angular/core';
import { persona } from '../models/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  @Input()
  public personas: persona[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  borrarPersona(persona: persona) {

    let arrIndex= this.personas.indexOf(persona);
     
     if ( arrIndex !== -1 ) {
      this.personas.splice( arrIndex, 1 );
    }
   
  }
  
}
