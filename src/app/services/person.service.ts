import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  initialValue: Person = {
    id: 0,
    name: '',
    lastName: '',
    age: 0,
    ci: '',
    gender: 'M',
  }
  personSelect: Person = this.initialValue
  _persons: Person[] = [
    {
      name: 'fernando',
      lastName: 'mercado',
      age: 22,
      ci: '81973853S',
      gender: 'M',
      id: 1
    }
  ]
  get persons():Person[]{
    return [...this._persons]
  }

  addPerson(person: Person) {
    person.id = this.persons.length +1
    this._persons.push(person)
  }
  updatePerson(person: Person) {
    this._persons.forEach(item=>{
      if(item.id ===person.id ){
        item.name = person.name
      }
    })
    console.log(this._persons)

  }
  deletePerson() {
    const id = this.personSelect.id
    this._persons = this._persons.filter(person => person.id !=id)
    this.personSelect = this.initialValue
  }



}
