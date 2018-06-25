import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
totalAmount: number;
paymentForm: any;
  constructor() { }

  ngOnInit() {
  }
  OnChanges() {
    this.totalAmount = (this.paymentForm.value.amount * 0.0375) + this.paymentForm.value.amount;
  }
calculatePayment() {
}
}
