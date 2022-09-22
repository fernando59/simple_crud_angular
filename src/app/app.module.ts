import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
