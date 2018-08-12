import { Component, OnInit, OnChanges, Input, EventEmitter } from '@angular/core';
import {PaymentInputs} from '../../shared/payment/paymentInputs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
totalAmount: number;
paymentForm: any;
@Input()
paymentInputs: PaymentInputs;
  constructor() { }

  ngOnInit() {
  }
  OnChanges() {

  }
calculatePayment() {
    this.paymentInputs.pay_amount = 0;
  this.totalAmount = (this.paymentInputs.pay_amount * 0.0375) + this.paymentInputs.pay_amount;
}
}
