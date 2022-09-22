import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from './models/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  myForm!: FormGroup;

  persons: Person[] = [
    {
      age: 20,
      name: 'fernando',
      ci: '8197383Sc',
      gender: 'M',
      id: 1,
      lastName: 'Mercado'
    }
  ]
  constructor(private readonly fb: FormBuilder) { this.buildForm() }
  ngOnInit(): void {
  }
  private buildForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      ci: ['', [Validators.required]]
    })

  }


  saveForm(){
    console.log(this.myForm.value)
  }
}
