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
  }

  closeEdit(person:Person){
    this.isEdit =false
    console.log(person)
    this.personService.updatePerson(person)
  }
  editPerson(person:Person){
    this.idSelect = person.id
    this.isEdit =true
    
    // this.formModal.show()
  }
}
