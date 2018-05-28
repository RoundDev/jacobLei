import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TenantsComponent} from './tenants.component';
import {NoteComponent} from './note/note.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NoteComponent
  ],
  exports: [
    TenantsComponent
  ]
})
export class TenantsModule { }
