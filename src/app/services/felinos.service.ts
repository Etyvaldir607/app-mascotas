import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';


import { Felino } from '../model/felino';
import { __param } from 'tslib';
import { Image } from '../model/image';


@Injectable({
  providedIn: 'root'
})
export class FelinosService {

  baseURL = 'https://api.thecatapi.com/' ;

  constructor( private http:HttpClient) {

  }


  getAllFelinos(): Observable<Felino[]>{
    const url = this.baseURL + 'v1/breeds';
    return this.http.get<Felino[]>(url);
  }

  getFelino (felinoName: string): Observable<Felino> {
    const url = this.baseURL + 'v1/breeds/search';
    return this.http.get(url, {  params: {'q':felinoName}});
  }

  
  getAllImages(): Observable<Image[]>{
    const url = this.baseURL + 'v1/images';
    return this.http.get<Image[]>(url);
  }

  getImage (idImg: string) :Observable<Image> {
    const url = this.baseURL + 'v1/images/' + idImg;
    return this.http.get(url);
  }


  getImageGalery(data): Observable<Image[]> {
    const url = this.baseURL + 'v1/images/search?';
    return this.http.get<Image[]>(url, {params:data });
  }



}
