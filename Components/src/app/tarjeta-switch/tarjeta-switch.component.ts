import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-switch',
  templateUrl: './tarjeta-switch.component.html',
  styleUrls: ['./tarjeta-switch.component.css']
})
export class TarjetaSwitchComponent implements OnInit {
  @Input()
  nombre: string='';
  @Input()
  title: string='';
  @Input()
  bio: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
