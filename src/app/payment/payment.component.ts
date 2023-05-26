import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var SqPaymentForm: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent implements OnInit, AfterViewInit {
  public phoneNumberModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, ];
  infoPaymentForm = this.formBuilder.group({
    // user: this.formBuilder.group({`
    given_name: ['', [Validators.required, Validators.maxLength(25)]],
    family_name: ['', [Validators.required, Validators.maxLength(25)]],
    phone_number: ['', [Validators.required, Validators.maxLength(15)]],
    email_address: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.pattern('[^@]*@[^@]*'),
      ],
    ],
    property_name: ['', [Validators.required, Validators.maxLength(100)]],
    differentName: ['', [Validators.required, Validators.maxLength(50)]],
    amountToPay: [
      '',
      [Validators.required, Validators.maxLength(4), Validators.minLength(1)],
    ],
    sqCardNumberError: [''],
    sqExpirationDateError: [''],
    sqCVVError: [''],
    sqPostalCodeError: [''],
  });
  formLoaded = false;
  firstNameError: string;
  lastNameError: string;
  phoneNumberError: string;
  emailError: string;
  propertyNameError: string;
  propertyCommentError: string;
  differentNameError: string;
  amountToPayError: string;
  modalAmountToPay: any;
  modalHeader: string;
  modalConformation: string;
  paymnetSuccess: boolean;
  conformationShow: boolean;
  paymentForm: any;
  amountToPay: any;
  totalAmount = 0;
  amountValue: any;
  intAmount: number;
  window: Window;
  cardButton: HTMLButtonElement;
  card: any;
  isSubmitting = false;
  payments: any;
  //   loadsScript = loadafter.loadsScript;
  // url: 'https://js.squareup.com/v2/paymentform';
  constructor(
    @Inject(DOCUMENT) private _doc,
    private appService: AppService,
    private formBuilder: FormBuilder
  ) {
    this.window = this._doc.defaultView;
  }
  ngOnInit() {
    // this.squarePaymentFunction();
    this.checkInputError();
  }

  async initializeCard() {
    this.card = await this.payments.card();
    await this.card.attach('#card-container');
    return this.card;
  }

  // Call this function to send a payment token, buyer name, and other details
  // to the project server code so that a payment can be created with
  // Payments API
  async createPayment(token) {
    const body = JSON.stringify({
      locationId: 'B0RXTVMP1T4WP',
      sourceId: token,
    });
    let intAmount = 0;
    const amount = (<HTMLInputElement>document.getElementById('amountToPay'))
      .value;
    const first_name = (<HTMLInputElement>document.getElementById('first_name'))
      .value;
    const last_name = (<HTMLInputElement>document.getElementById('last_name'))
      .value;
    const email_address = (<HTMLInputElement>(
      document.getElementById('email_address')
    )).value;
    const phone_number = (<HTMLInputElement>(
      document.getElementById('phone_number')
    )).value;
    intAmount = parseInt(amount, 10);
    this.sendSqPayment({
      token: token,
      amount_money: amount,
      first_name,
      last_name,
      email_address,
      phone_number,
    });
  }

  // This function tokenizes a payment method.
  // The ‘error’ thrown from this async function denotes a failed tokenization,
  // which is due to buyer error (such as an expired card). It is up to the
  // developer to handle the error and provide the buyer the chance to fix
  // their mistakes.
  async tokenize(paymentMethod) {
    const tokenResult = await paymentMethod.tokenize();
    if (tokenResult.status === 'OK') {
      return tokenResult.token;
    } else {
      let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
      if (tokenResult.errors) {
        errorMessage += ` and errors: ${JSON.stringify(tokenResult.errors)}`;
      }
      throw new Error(errorMessage);
    }
  }

  async handlePaymentMethodSubmission() {
    try {
      // disable the submit button as we await tokenization and make a
      // payment request.
      this.isSubmitting = true;
      const token = await this.tokenize(this.card);
      const paymentResults = await this.createPayment(token);
    } catch (e) {
      this.isSubmitting = false;
      console.error(e.message);
    }
  }

  async ngAfterViewInit() {
    if (!this.window.Square) {
      throw new Error('Square.js failed to load properly');
    }

    try {
      this.payments = this.window.Square.payments(
        'sq0idp-kh1SRsHUXqn-d5ba6YGQqg',
        'B0RXTVMP1T4WP'
      );
    } catch (err) {
      console.log('error', err);
      return;
    }

    try {
      this.card = await this.initializeCard();
    } catch (e) {
      console.error('Initializing Card failed', e);
      return;
    }
  }

  checkInputError() {
    if (this.infoPaymentForm.controls.given_name.value === '') {
      this.firstNameError = 'First Name Required';
    } else {
      this.firstNameError = null;
    }
    if (this.infoPaymentForm.controls.family_name.value === '') {
      this.lastNameError = 'Last Name Required';
    } else {
      this.lastNameError = null;
    }
    if (this.infoPaymentForm.controls.phone_number.value === '') {
      this.phoneNumberError = 'Phone Number Required';
    } else {
      this.phoneNumberError = null;
    }
    if (this.infoPaymentForm.controls.email_address.value === '') {
      this.emailError = 'Email Address Required';
    } else {
      this.emailError = null;
    }
    if (this.infoPaymentForm.controls.property_name.value === '') {
      this.propertyNameError = 'Property Name Required';
    } else {
      this.propertyNameError = null;
    }
    if (this.infoPaymentForm.controls.differentName.value === '') {
      this.differentNameError = 'Name Required';
    } else {
      this.differentNameError = null;
    }
    if (
      this.infoPaymentForm.controls.amountToPay.value === '' ||
      this.infoPaymentForm.controls.amountToPay.value === 0 ||
      this.infoPaymentForm.controls.amountToPay.value < 1
    ) {
      this.amountToPayError = 'Amount Required. Minimum $1 maximum $9999';
    } else {
      this.amountToPayError = null;
    }
  }

  conformationModal() {
    this.conformationShow = true;
    // const amountModal = (<HTMLInputElement>document.getElementById('amountToPay')).value;
    this.modalHeader = 'Do You Agree To Pay';
    this.modalAmountToPay = this.modalTotal();
  }
  modalTotal() {
    this.amountValue = (<HTMLInputElement>(
      document.getElementById('amountToPay')
    )).value;
    this.intAmount = parseInt(this.amountValue);
    this.totalAmount = this.intAmount * 0.0375 + this.intAmount;
    console.log('Total amount' + ' ' + this.totalAmount);
    return this.totalAmount.toFixed(2);
  }
  sendUserEmail(data) {
    this.appService
      .sendUserPaymentEmail(data.infoPaymentForm.value)
      .subscribe((response) => {
        if (response) {
          console.log('Email sent');
        }
        // console.log('data', data);
      });
  }

  sendAdminEmail(data) {
    this.appService
      .sendAdminPaymentEmail(data.infoPaymentForm.value)
      .subscribe((data) => {
        // console.log('data', data);
      });
  }

  sendSqPayment(data) {
    this.conformationShow = false;
    this.appService.sendPayment(data).subscribe(async (response) => {
      if (response.statusCode === 200) {
        this.paymnetSuccess = true;
        this.sendUserEmail(this);
        this.modalHeader = 'Thank You';
        this.modalConformation = 'We received your payment';
        (<HTMLInputElement>document.getElementById('payButton')).disabled =
          true;
        this.sendAdminEmail(this);
        this.infoPaymentForm.reset();
        await this.card.destroy();
        await this.initializeCard();
      } else if (response.statusCode !== 200) {
        this.paymnetSuccess = false;
        this.modalHeader = 'Sorry Something Went Wrong';
        this.modalConformation = 'Please, check form for errors';
      }
    });
  }
}
