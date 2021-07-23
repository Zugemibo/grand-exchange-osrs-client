import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, JsonpClientBackend, HttpHeaders } from '@angular/common/http';
import { ItemDTO } from './ItemDTO';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ItemService {

  public url: string = 'http://localhost:8080/api/v1/item/highAlch';

  constructor(private http: HttpClient) {
  }


  // public getHighAlchemyItems(): Observable<ItemDTO[]> {
  //   return this.http.get<ItemDTO[]>(this.url)
  //     .pipe(map((response: any) => response.json()));
  // }


  public getHighAlchemyItems(): Observable<ItemDTO[]> {
    return this.http.get<ItemDTO[]>(this.url);
  }

}