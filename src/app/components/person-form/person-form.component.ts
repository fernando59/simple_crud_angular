import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  formPerson!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly personService: PersonService
  ) {
  }

  private buildForm() {
    this.formPerson = this.fb.group({
      name: ['',  Validators.required],
      lastname: ['',  Validators.required],
      ci: ['',  Validators.required],
      gender: ['M',  Validators.required],
      age: ['',  Validators.required],
    })

  }
  saveForm() {
    if (this.formPerson.invalid) {
      this.formPerson.markAllAsTouched()
      return
    }
    console.log(this.formPerson.value)
    this.formPerson.value
  }
  isValidField(field: string) {
    return this.formPerson.controls[field].errors && this.formPerson.controls[field].touched
  }
  ngOnInit(): void {
    this.buildForm()
  }
}
