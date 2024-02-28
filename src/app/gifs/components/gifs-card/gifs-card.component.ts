import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit{  //el OnInit se ejecuta cuando el componente se inicializa

  @Input()
  public gif!:Gif; //gif! - defino que el gif siempre va a venir

  constructor(){}

  ngOnInit(): void {
    if( !this.gif ) throw new Error('Gif property is required'); //en caso de que no llege ningun gif lanzo el error
  }


}
