import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

heroes: string[] = ['Spiderman', 'Venom', 'Hulk', 'Mr. Fantástico'];
heroeBorrado: string =''

borrarHeroe(){
  console.log('borrando...');
  this.heroeBorrado=this.heroes.pop() || '';
}
heroeBorradob():boolean {
  return this.heroeBorrado != '';
}

}