import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html',
})
export class PersonListComponent implements OnInit {

  constructor() { }
  @Input() persons: Person[] = [];
  ngOnInit(): void {
  }

}
