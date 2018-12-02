import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators';

export interface Pet {
  name: string;
  age: number;
}


@Injectable()
export class PetService {

  url = 'assets/pets.json';
  endPoint = 'api/v1/pets';
  txtEndPoint = '/assets/pets.txt';
  newPet;
  
  constructor(private http: HttpClient) {}

  getPetsData(): Observable<Pet> {
    const params = new HttpParams()
      .set('id', '123')
      .set('includeAddress', 'true')
    return this.http.get<Pet>(this.url, {
      params: params
    })
  }

  fetchPetsWithHeaders(): Observable<HttpResponse<Pet>> {
    return this.http.get<Pet>(this.url, {
      // put something in request header
      headers: new HttpHeaders().set('app-language', 'it'),
      // get the http response with http response
      observe: 'response'
    })
  }

  getUnavailableData(): Observable<Pet> {
    return this.http.get<Pet>(this.endPoint)
  }


  getPetsTxtFormat() {
    // to get not json format in a get call
    return this.http.get(this.txtEndPoint, { responseType: 'text'})
  }

  postPet(): Observable<any> {
    const newPet = {
      name: 'Tiger'
    }
    return this.http.post<any>(this.endPoint, this.newPet)
  }
}
