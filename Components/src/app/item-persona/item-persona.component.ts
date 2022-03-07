import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../Models/Persona';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {

@Input()
public persona:Persona = {
  id:0,
  nombre:'',
  title:'',
  bio:''

};

  constructor() { }

  ngOnInit(): void {
  }

}
