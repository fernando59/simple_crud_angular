import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {
  @Input() formModal:any
  @Input() deleteModal: any
  
  constructor(private readonly personService:PersonService) { }
  persons: Person[] = this.personService.persons;
  ngOnInit(): void {
  }

  openModalDelete(person:Person){
    console.log(person)
    this.personService.personSelect = person
    this.deleteModal.show()
  }

  editPerson(person:Person){
    this.personService.personSelect = person
    this.formModal.show()
  }
}
