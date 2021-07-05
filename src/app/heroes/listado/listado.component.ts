import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeEliminado: string = '';
  borrarHeroe(){
    console.log('borrando...');
    //this.heroes.splice(0, 1);
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeEliminado = heroeBorrado;
    console.log('Heroe Borrado', heroeBorrado);
  }
}
