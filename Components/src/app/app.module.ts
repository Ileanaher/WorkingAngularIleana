import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaSwitchComponent } from './tarjeta-switch/tarjeta-switch.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ItemPersonaComponent } from './item-persona/item-persona.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    TarjetaSwitchComponent,
    ListadoPersonasComponent,
    ItemPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
