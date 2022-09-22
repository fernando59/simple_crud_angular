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
  isEdit:boolean= false
  
  constructor(private readonly personService:PersonService) { }
  get persons(){
    return this.personService.persons
  }
  ngOnInit(): void {
  }
  idSelect= 0

  openModalDelete(person:Person){
    this.personService.personSelect = person
    this.deleteModal.show()
    this.idSelect=0
  }

  closeEdit(person:Person){
    this.personService.updatePerson(person)
    this.idSelect=0
  }
  editPerson(person:Person){
    this.idSelect = person.id
    
    // this.formModal.show()
  }
}
