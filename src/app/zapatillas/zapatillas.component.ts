import { Component, OnInit} from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillasService } from '../services/zapatilla.service';

@Component ({
    selector:'zapatillas',
    templateUrl:'./zapatillas.component.html',
    styleUrls: ['./zapatillas.component.css'],
    providers: [ZapatillasService]
})

export class ZapatillasComponent implements OnInit {
    public titulo: string = "componente de zapatilla"; // no es la mejor practica poner el calos ahi
   
    public marcas: String[];
    public color : string;
    public mi_marca : string;
    public zapatillas : Array<Zapatilla>;

    constructor(
        private _zapatillaService: ZapatillasService  // el servicio va en el constructor y se pone con _ el nombre
    )
    
    
       { 
        this.mi_marca = 'Test';
        this.color = 'pink';
        this.marcas = new Array();
        

    }
    ngOnInit(){  // voy a llamar a mi servicio
       this.zapatillas =this._zapatillaService.getZapatillas();
   
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach( (zapatilla, index)=>{
            if( this.marcas.indexOf(zapatilla.marca ) < 0 )
                {
                    this.marcas.push(zapatilla.marca);
                }
           
      
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }
    
    removeMarca(index){
       // delete this.marcas[index];
       this.marcas.splice(index, 1);

    }

    onBlur() {
        console.log('has salido del input');

    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}