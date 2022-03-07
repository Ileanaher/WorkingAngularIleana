import { Component } from '@angular/core';
import { persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Listado de personas con Boostrap';
  public personas: persona[] = [];
 
}
