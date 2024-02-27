import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey:       string = '2Nrx0S8Uo9d4RfaNsW4KVKkWPNHw21yT';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  constructor( private http: HttpClient) { }

  get tagsHistory(){                //uso de metodo spread - opcional
    return [...this._tagsHistory];  //utiliza el metodo spread "..." para hacer una copia de _tagsHistory para evitar que se edite el orginal ya que todos los objetos de Js pasan por referencia
  }

  get gifList(){
    return [...this._gifList];
  }

  private organizeHistory(tag: string){
    tag = tag.toLowerCase(); //lo cconvierrte en minuscula

    if( this._tagsHistory.includes( tag )){ //si el nuevo tag ya existe los elimino
      this._tagsHistory = this._tagsHistory.filter( tagsHistory => tagsHistory != tag );
    }

    this._tagsHistory.unshift( tag ); //despues de eliminar el tag existente llo inserto al principio
    this._tagsHistory = this._tagsHistory.splice(0, 10); //limito la lista del historial a 10 elementos
  }

searchTag( tag:string ):void{

    if( !tag ) return;

    this.organizeHistory( tag );
    //console.log(this._tagsHistory);

    // Peticion Http - AngularCommonHttp (Recomendada)
    const params = new HttpParams()
    .set('api_key', this.apiKey ) //el apikey de mi dashboard en Giphy
    .set('limit', '10' ) // el limite de la peticio (10 imagenes)
    .set('q', tag ); //el query ( el texto ingresado en el input)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params }) //<SearchResponse> indica el tipo de dato que se esta recibiendo en la peticion usando una interface - de esta manera puedo saber todos los datos que vienen de esa peticion
    // this.http.get(`${this.serviceUrl}/search?api_key=2Nrx0S8Uo9d4RfaNsW4KVKkWPNHw21yT&q=valorant&limit=10`)
    .subscribe( resp => {

      // console.log( resp );
      this._gifList = resp.data;
    //  console.log( { gif: this._gifList } );


    });
    // Peticion Http - tradicional
    // const resp = await fetch('http://api.giphy.com/v1/gifs/search?api_key=2Nrx0S8Uo9d4RfaNsW4KVKkWPNHw21yT&q=valorant&limit=10')
    // const data = await resp.json();
    // console.log(data);

  }

}
