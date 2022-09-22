import { Component } from '@angular/core';

declare var window: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formModal: any
  ngOnInit(): void {

    this.formModal = new window.bootstrap.Modal(document.getElementById('myModal'),{
      backdrop:'static'
    })
  }


  openModal() {
    this.formModal.show();
  }



}
