import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  //public tagHistory = this.gifsService.tagsHistory;

  constructor( private gifsService: GifsService){}

  get tagHistory(): string[]{  //se debe usar siempre getters cuando se obtiene un servicio privado para poder obtener los datos
    return this.gifsService.tagsHistory;
  }

  searchTagSidebar( tag: string ): void{
    this.gifsService.searchTag(tag);
  }

}
