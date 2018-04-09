import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {
showPaymentForm: boolean;
  constructor() { }

  ngOnInit() {
    this.showPaymentForm = false;
  }
togglePaymentForm() {
    this.showPaymentForm = !this.showPaymentForm;
}
}
