import {NgModule} from '@angular/core';
import {HeroeComponent} from '../heroes/heroe/heroe.component';
import {ListadoComponent} from '../heroes/listado/listado.component';
import {CommonModule} from '@angular/common';
import {ContadorComponent} from './contador/contador.component';


@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ]
})
export class ContadorModule {

}
