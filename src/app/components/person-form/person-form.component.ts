import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';


declare var window: any
@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  formPerson!: FormGroup;
  @Input() formModal: any

  person: Person = {
    age: 0,
    ci: '',
    gender: 'F',
    id: 0,
    lastName: '', name: ''
  }
  constructor(
    private readonly fb: FormBuilder,
    private readonly personService: PersonService
  ) {
    this.person = this.personService.personSelect
  }


  ngOnInit(): void {
    this.buildForm()
  }

  // person =this.personService.personSelect
  private buildForm() {
    // let person =this.personService.personSelect
    this.formPerson = this.fb.group({
      name: [this.person.name, Validators.required],
      lastName: [this.person.lastName, Validators.required],
      ci: [this.person.ci, Validators.required],
      gender: [this.person.gender, Validators.required],
      age: [this.person.age, Validators.required],
    })

  }
  saveForm() {
    if (this.formPerson.invalid) {
      this.formPerson.markAllAsTouched()
      return
    }

    this.personService.addPerson(this.formPerson.value)
    this.closeModal()
  }

  //Valid field
  isValidField(field: string) {
    return this.formPerson.controls[field].errors && this.formPerson.controls[field].touched
  }
  closeModal() {
    this.formModal.hide()
    this.formPerson.reset()
    this.formPerson.controls['gender'].setValue('M')
  }

}
