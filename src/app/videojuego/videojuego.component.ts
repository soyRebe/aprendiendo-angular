import {Component} from '@angular/core';

@Component({
    selector:'videojuego',
    templateUrl:'./videojuego.component.html'
     
    
    
    
 
})

export class VideojuegoComponent {
    public titulo: String;
    public listado :String;

    constructor(){
        this.titulo = " Componente de Videojuegos";
        this.listado = "los juegos más populares";
        console.log('estoy aca');
    }

}