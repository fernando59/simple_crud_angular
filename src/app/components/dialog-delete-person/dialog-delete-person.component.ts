import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'dialog-delete-person',
  templateUrl: './dialog-delete-person.component.html',
})
export class DialogDeletePersonComponent implements OnInit {
  @Input() deleteModal: any
  personName:string =''
  constructor(
    private readonly personService:PersonService
  ) { 
  }

  ngOnInit(): void {
  }

  closeModalDelete(){
    this.deleteModal.hide()
  }

  deletePerson(){
    this.personService.deletePerson()
    this.closeModalDelete()
  }

}
