import { Component } from '@angular/core';

declare var window: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formModal: any
  deleteModal: any
  ngOnInit(): void {

    //Modal Form
    this.formModal = new window.bootstrap.Modal(document.getElementById('myModal'), {
      backdrop: 'static'
    })
    //Modal Delete
    this.deleteModal = new window.bootstrap.Modal(document.getElementById('modalDelete'), {
      backdrop: 'static'
    })
  }


  openModal() {
    this.formModal.show();
  }



}
