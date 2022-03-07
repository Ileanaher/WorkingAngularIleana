import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { persona } from '../models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public nombreFormControl = new FormControl('')
  public tituloFormControl = new FormControl('')
  public bioFormControl = new FormControl('')
  public personaFormGroup = new FormGroup({
    'nombre': this.nombreFormControl,
    'titulo': this.tituloFormControl,
    'bio': this.bioFormControl
  });
  public titulos: string[];

  @Input()
  public personas: persona[] = [];


  constructor() {

    this.titulos = [
      'Maestro',
      'Desarrollador',
      'Doctor',
      'Abogado'
    ]
   }

  ngOnInit(): void {
  }
  guardar() {
    this.personas.push({
      id: 1,
      nombre: this.nombreFormControl.value,
      titulo: this.tituloFormControl.value,
      bio: this.bioFormControl.value
    })
  }
}
