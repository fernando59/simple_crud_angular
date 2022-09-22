import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(
    private readonly fb: FormBuilder,
    private readonly personService: PersonService
  ) { }

  
  ngOnInit(): void {
    this.buildForm()
  }

  private buildForm() {
    this.formPerson = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      ci: ['', Validators.required],
      gender: ['M', Validators.required],
      age: ['', Validators.required],
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
