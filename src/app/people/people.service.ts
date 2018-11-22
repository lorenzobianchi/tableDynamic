import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';

const source = [
  {
    id: 1,
    name: 'Lorenzo',
    surname: 'Bianchi',
    twitter: '@lorebianchi',
  }
]

@Injectable()
export class PeopleService {
  constructor() {}

  getPeople() :Observable<any> {
    return of(source);
  }
}
