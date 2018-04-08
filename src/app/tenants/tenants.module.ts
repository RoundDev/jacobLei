import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TenantsComponent} from './tenants.component';
import {PaymentComponent} from '../payment/payment.component';
import {MaintenanceComponent} from '../maintenance/maintenance.component';
import {NoteComponent} from './note/note.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaymentComponent,
    MaintenanceComponent,
    NoteComponent
  ],
  exports: [
    TenantsComponent
  ]
})
export class TenantsModule { }
