import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [  
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

    get personajes(): Personaje[]       {
        return [...this._personajes];
    }

    constructor () {
        console.log('Servicio inicializado');
    }

    agregarPersonaje(psj: Personaje) {
        this._personajes.push(psj);
    }

}