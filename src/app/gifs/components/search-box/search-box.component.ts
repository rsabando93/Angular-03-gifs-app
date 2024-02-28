import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')  //obtiene el valor del elemento con la referencia local txtTagInput
  public tagInput!: ElementRef<HTMLInputElement>;  //añade el tipo del elemento referenciado que se obtiene, en este caso es un input
                                                   //tagInout! - ! significa que le estamos diciendo a typescript que siempre va a tener un valor
  constructor( private gifsService: GifsService ){ } //inyecta el servicio de GifsService para poder usarlo aqui
                                                   // searchTag(newTag: string){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value; //obtienen el valor del tagInput
   // console.log(newTag);
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = ''; //limpia el valor del tagInput


  }
}
