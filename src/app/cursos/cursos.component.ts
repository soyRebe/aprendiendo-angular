import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre : string;
  public followers : number;

  constructor(
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe ((params:Params)=>{
      this.nombre = params.nombre;
      this.followers = +params.followers; // se define como string para que sea number como esta declarado le ponenmos el + adelante
     // console.log(this.nombre);
    //  console.log(typeof +params.followers);
    });


  }
   reDirigir(){
    this._router.navigate(['/zapatillas']);

   } 

}
