import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';


@Injectable()

export class ZapatillasService {
    public zapatillas : Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla ('Puma','Puma new','gris',4500,true),
            new Zapatilla ('Nike Runner MD','Nike','Negro',1980,false),
            new Zapatilla ('Puma','Puma new','blanco',1980,true),
            new Zapatilla ('Adidas y','Adidas new','blanco',2000,true),
            new Zapatilla ('Democrata Cuero ','Democrata ','Marron',5100,true),
            new Zapatilla ('Democrata Pu','Democrata ','blanco',5500,true),
        ];

    }
    getTexto(){
        return "Hola Mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla> {
        return this.zapatillas;

    }


}