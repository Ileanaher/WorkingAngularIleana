import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { GastoService } from 'src/app/gastos/service/gasto.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  constructor(public appService:AppService) { }

  ngOnInit(): void {
  }

}
