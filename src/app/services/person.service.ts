import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  idPerson: number = 0
  persons: Person[] = [
    {
      age: 20,
      name: 'fernando',
      ci: '8197383Sc',
      gender: 'M',
      id: 1,
      lastName: 'Mercado'
    }
  ]
  constructor() { }
}
