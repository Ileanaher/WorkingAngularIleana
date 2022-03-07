import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { persona } from '../models/persona';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input()
  persona: persona = {
    id:0,
    titulo: '',
    nombre: '',
    bio: ''
  }

  @Output()
  public onBorrar: EventEmitter<persona> = new EventEmitter<persona>();

  constructor() { }

  ngOnInit(): void {
  }
  borrar() {
    this.onBorrar.emit(this.persona);
  }
}
