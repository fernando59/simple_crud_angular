import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  idPerson: number = 0
  persons: Person[] = []

  addPerson(person:Person){
    this.persons.push(person)
  }
  updatePerson(person:Person){

  }
  deletePerson(id:number){
    this.persons =this.persons.filter(person=>person.id !==id)
  }

 

}
