import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')  //obtiene el valor del elemento con la referencia local txtTagInput
  public tagInput!: ElementRef<HTMLInputElement>;  //añade el tipo del elemento referenciado que se obtiene, en este caso es un input
                                                   //tagInout! - ! significa que le estamos diciendo a typescript que siempre va a tener un valor
  // searchTag(newTag: string){
  searchTag(){
    const newTag = this.tagInput.nativeElement.value; //obtienen el valor del tagInput
    console.log(newTag);


  }
}
