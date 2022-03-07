import { Component } from '@angular/core';
import { Persona } from './Models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public personas :Persona[]=[]
  title = 'Components';


  constructor(){
  
  this.personas=[
  {
    id:1,
    nombre:'Ileana Hernandez',
    title:'Ingeniera Sistemas',
    bio:'Developer c# ASP MVC .net, incursionando en Angular para crecer profesionalmente.'

  },
  {
    id:2,
    nombre:'Mario Fernandez',
    title:'Ingeniera Civil',
    bio:'Estudiante de Angular' 

  },
  {
    id:3,
    nombre:'Martha Sanchez',
    title:'Ingeniera Electronico',
    bio:'Estudiante de Angular'

  }

]


  }
}
