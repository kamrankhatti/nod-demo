import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormComponent } from './components';
import { HomeComponent } from './home.component';

import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    FormComponent,
    HomeComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    HomeComponent
  ],
  bootstrap: []
})
export class HomeModule {}
