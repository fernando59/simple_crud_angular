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
  persons: Person[] = [
    {
      name: 'fernando',
      lastName: 'mercado',
      age: 22,
      ci: '81973853S',
      gender: 'M',
      id: 1
    }
  ]

  addPerson(person: Person) {
    person.id = this.persons.length +1
    this.persons.push(person)
  }
  updatePerson(person: Person) {

  }
  deletePerson() {
    console.log(this.personSelect)
    // this.persons.pop()
    const id = this.personSelect.id
    // console.log(this.persons.filter(person => person.id !== id))
    this.persons = this.persons.filter(person => person.id !=id)
    console.log(this.persons)
    // this.persons = this.persons.filter(person => person.id !== id)
    this.personSelect = this.initialValue
  }



}
