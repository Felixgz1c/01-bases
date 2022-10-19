import { Component  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
  
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent{

  personajes: Personaje[] = [  
    {
      nombre:'Goku',
      poder: 9000
    },
    {
      nombre:'Vegeta',
      poder:8500
    },
    {
      nombre:'Krillin',
      poder:1000
    }
  ]

  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPsj(psj: Personaje) {
    this.personajes.push(psj);
  }
}
