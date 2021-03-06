import {
  Component,
  OnInit,
  OnChanges,
  Input,
  AfterViewInit,
  AfterContentInit,
  DoCheck,
  OnDestroy,
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import {AppService} from '../app.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {ActivatedRoute} from '@angular/router';
import {Payment} from './payment';
// import {loadafter} from 'shared/js/loadafter.js';

declare var SqPaymentForm: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent implements OnInit, AfterViewInit, AfterContentInit, OnChanges, DoCheck, OnDestroy, AfterContentChecked, AfterViewChecked {
  public phoneNumberModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  infoPaymentForm = this.formBuilder.group({
    // user: this.formBuilder.group({
    'given_name': ['', [Validators.required, Validators.maxLength(25)]],
    'family_name': ['', [Validators.required, Validators.maxLength(25)]],
    'phone_number': ['', [Validators.required, Validators.maxLength(15)]],
    'email_address': ['', [Validators.required, Validators.email, Validators.pattern('[^@]*@[^@]*')]],
    'property_name': ['', [Validators.required, Validators.maxLength(100)]],
    'differentName': ['', [Validators.required, Validators.maxLength(50)]],
    'amountToPay': ['', [Validators.required, Validators.maxLength(4), Validators.minLength(1)]],
    'sqCardNumberError': [''],
    'sqExpirationDateError': [''],
    'sqCVVError': [''],
    'sqPostalCodeError': ['']
  });
  formLoaded: boolean =  false;
  firstNameError: string;
  lastNameError: string;
  phoneNumberError: string;
  emailError: string;
  propertyNameError: string;
  propertyCommentError: string;
  differentNameError: string;
  // sqCardNumberError: string;
  // sqExpirationDateError: string;
  // sqCVVError: string;
  // sqPostalCodeError: string;
  amountToPayError: string;
  modalAmountToPay: any;
  modalHeader: string;
  modalConformation: string;
  paymnetSuccess: boolean;
  conformationShow: boolean;
  paymentForm: any;
  amountToPay: any;
  totalAmount: number = 0;
  amountValue: any;
  intAmount: number;
//   loadsScript = loadafter.loadsScript;
// url: 'https://js.squareup.com/v2/paymentform';
  constructor(private appService: AppService, private formBuilder: FormBuilder) {}
  ngAfterContentInit() {}

  ngAfterContentChecked(): void { }

  ngAfterViewChecked(): void {}
  ngOnDestroy() {
  }

  // ngOnChanges():  {
  // }
  ngOnInit() {
    this.squarePaymentFunction();
    this.checkInputError();
  }

  ngAfterViewInit() {
    }

  ngOnChanges() {}

  ngDoCheck() {}
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
    if (this.infoPaymentForm.controls.amountToPay.value === '' || this.infoPaymentForm.controls.amountToPay.value === 0
      || this.infoPaymentForm.controls.amountToPay.value < 1) {
      this.amountToPayError = 'Amount Required. Minimum $1 maximum $9999';
    } else {
      this.amountToPayError = null;
    }
  }
squarePaymentFunction() {
    let vm;
    vm = this;
    // this.calculatePayment();
    const applicationId = 'sq0idp-kh1SRsHUXqn-d5ba6YGQqg';
    // const applicationIdTest = 'sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw';
      // 'sq0idp-kh1SRsHUXqn-d5ba6YGQqg'; prod
      // 'sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw';

    // Set the location ID
    const locationId = 'B0RXTVMP1T4WP';
    // const locationIdTest = 'CBASEDepGeN6Eev-N-FYE90UA1sgAQ';
      // 'B0RXTVMP1T4WP'; prod
      // 'CBASEDepGeN6Eev-N-FYE90UA1sgAQ';
    this.paymentForm = new SqPaymentForm({

      // Initialize the payment form elements
      applicationId: applicationId,
      locationId: locationId,
      inputClass: 'sq-input',
      autoBuild : false,

      // Customize the CSS for SqPaymentForm iframe elements
      inputStyles: [{
        fontSize: '.9em'
      }],

      // Initialize the credit card placeholders
      cardNumber: {
        elementId: 'sq-card-number',
        placeholder: '•••• •••• •••• ••••'
      },
      cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
      },
      expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
      },
      postalCode: {
        elementId: 'sq-postal-code',
        placeholder: '54321'
      },
      // SqPaymentForm callback functions
      callbacks: {

        /*
         * callback function: methodsSupported
         * Triggered when: the page is loaded.
         */
        methodsSupported: function (methods) {

          // let applePayBtn = document.getElementById('sq-apple-pay');
          // let applePayLabel = document.getElementById('sq-apple-pay-label');
          // let masterpassBtn = document.getElementById('sq-masterpass');
          // let masterpassLabel = document.getElementById('sq-masterpass-label');
          //
          // // Only show the button if Apple Pay for Web is enabled
          // // Otherwise, display the wallet not enabled message.
          // if (methods.applePay === true) {
          //   applePayBtn.style.display = 'inline-block';
          //   applePayLabel.style.display = 'none' ;
          // }
          // // Only show the button if Masterpass is enabled
          // // Otherwise, display the wallet not enabled message.
          // if (methods.masterpass === true) {
          //   masterpassBtn.style.display = 'inline-block';
          //   masterpassLabel.style.display = 'none';
          // }
        },

        /*
         * callback function: createPaymentRequest
         * Triggered when: a digital wallet payment button is clicked.
         */
        createPaymentRequest: function () {
          // The payment request below is provided as
          // guidance. You should add code to create the object
          // programmatically.
          let paymentRequestJson;
          return paymentRequestJson;
          // return {
          //   requestShippingAddress: true,
          //   currencyCode: 'USD',
          //   countryCode: 'US',
          //   total: {
          //     label: 'Hakuna',
          //     amount: '{{REPLACE_ME}}',
          //     pending: false,
          //   },
          //   lineItems: [
          //     {
          //       label: 'Subtotal',
          //       amount: '{{REPLACE_ME}}',
          //       pending: false,
          //     },
          //     {
          //       label: 'Shipping',
          //       amount: '{{REPLACE_ME}}',
          //       pending: true,
          //     },
          //     {
          //       label: 'Tax',
          //       amount: '{{REPLACE_ME}}',
          //       pending: false,
          //     }
          //   ]
          // };
        },

        /*
         * callback function: cardNonceResponseReceived
         * Triggered when: SqPaymentForm completes a card nonce request
         */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            console.log('Encountered errors:');
            errors.forEach(function (error) {
              console.log('  ' + error.message);
            });

            return;
          }

          // alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */

          // Assign the nonce value to the hidden form field
          // document.getElementById('card-nonce').value = nonce;
          // needs to be extracted from the
          (<HTMLInputElement>document.getElementById('card-nonce')).value = nonce; // casting so .value will work
          let intAmount = 0;
          let amount = (<HTMLInputElement>document.getElementById('amountToPay')).value;
          let first_name = (<HTMLInputElement>document.getElementById('first_name')).value;
          let last_name = (<HTMLInputElement>document.getElementById('last_name')).value;
          let email_address = (<HTMLInputElement>document.getElementById('email_address')).value;
          let phone_number = (<HTMLInputElement>document.getElementById('phone_number')).value;
          intAmount = parseInt(amount, 10);
          // let totalAmount = (<HTMLInputElement>document.getElementById('amountWithFee')).value;
          // get this value from the database when the user is logged in
          // (<HTMLInputElement>document.getElementById('sq-id')).value = "sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw" // "CBASEC8F-Phq5_pV7UNi64_kX_4gAQ";

          // POST the nonce form to the payment processing page
         // let formdata = (<HTMLFormElement>document.getElementById('nonce-form'));
          vm.sendSqPayment({'nonce': nonce, 'amountToPay': amount, first_name, last_name, email_address, phone_number});
        },

        /*
         * callback function: unsupportedBrowserDetected
         * Triggered when: the page loads and an unsupported browser is detected
         */
        unsupportedBrowserDetected: function () {
          alert('Your browser seems to be unsupported for card processing. Please try a different browser.');
        },

        /*
         * callback function: inputEventReceived
         * Triggered when: visitors interact with SqPaymentForm iframe elements.
         */
        inputEventReceived: function (inputEvent) {
          switch (inputEvent.eventType) {
            case 'focusClassAdded':
              /* HANDLE AS DESIRED */
              break;
            case 'focusClassRemoved':
              /* HANDLE AS DESIRED */
              break;
            case 'errorClassAdded':
              document.getElementById('error').innerHTML = 'Please fix card information errors before continuing.';
              /* HANDLE AS DESIRED */
              break;
            case 'errorClassRemoved':
              document.getElementById('error').style.display = 'none';
              /* HANDLE AS DESIRED */
              break;
            case 'cardBrandChanged':
              /* HANDLE AS DESIRED */
              break;
            case 'postalCodeChanged':
              /* HANDLE AS DESIRED */
              break;
          }
        },

        /*
         * callback function: paymentFormLoaded
         * Triggered when: SqPaymentForm is fully loaded
         */
        paymentFormLoaded: function () {
          /* HANDLE AS DESIRED */
          console.log('The form loaded!');
        }
      }
    });
  }
  requestCardNonce(event) {

    // Don't submit the form until SqPaymentForm returns with a nonce
    event.preventDefault();

    // const address = $('#delivery-address').val();
    // const differentName = $('#differentName').val();
    // const propertyComment = $('#propertyComment').val();
    // const propertyName = $('#propertyName').val();
    // const phoneNumber = $('#phoneNumber').val();
    // const email = $('#email').val();
    // const peyeeName = $('#peyeeName').val();
    //
    // if (!differentName) {
    //   $('#differentName').css('border-color', 'red');
    // }
    //
    // if (!propertyComment) {
    //   $('#propertyComment').css('border-color', 'red');
    // }
    //
    // if (!propertyName) {
    //   $('#propertyName').css('border-color', 'red');
    // }
    //
    // if (!phoneNumber) {
    //   $('#phoneNumber').css('border-color', 'red');
    // }
    //
    // if (!email) {
    //   $('#email-address').css('border-color', 'red');
    // }
    // if (!peyeeName) {
    //   $('#peyeeName').css('border-color', 'red');
    // }
    //
    // if (!differentName || !propertyComment || !propertyName || !peyeeName || !email || !phoneNumber) {
    //   return false;
    // }
    // Request a nonce from the SqPaymentForm object
    this.paymentForm.requestCardNonce();
  }
loadPaymentForm() {
    if (this.formLoaded === false) {
      this.paymentForm.build();
      this.formLoaded = true;
    }
}
  conformationModal() {
    this.conformationShow = true;
    // const amountModal = (<HTMLInputElement>document.getElementById('amountToPay')).value;
    this.modalHeader = 'Do You Agree To Pay';
    this.modalAmountToPay = this.modalTotal();
  }
modalTotal() {
  this.amountValue = (<HTMLInputElement>document.getElementById('amountToPay')).value;
  this.intAmount = parseInt(this.amountValue);
  this.totalAmount = (this.intAmount * 0.0375) + this.intAmount;
  console.log('Total amount' + ' ' + this.totalAmount);
  return this.totalAmount.toFixed(2);
}
  sendUserEmail(data) {
    this.appService.sendUserPaymentEmail(data.infoPaymentForm.value).subscribe((data) => {
      // console.log('data', data);
    });
  }

  sendAdminEmail(data) {
    this.appService.sendAdminPaymentEmail(data.infoPaymentForm.value).subscribe((data) => {
      // console.log('data', data);
    });
  }


  sendSqPayment(data) {
    this.conformationShow = false;
    this.appService.sendPayment(data).subscribe((data) => {
        if (data.statusCode === 200) {
          this.paymnetSuccess = true;
          this.sendUserEmail(this);
          this.modalHeader = 'Thank You';
          this.modalConformation = 'We received yor payment';
          (<HTMLInputElement>document.getElementById('payButton')).disabled = true;
          this.sendAdminEmail(this);
          console.log('Data success');
          this.infoPaymentForm.reset();
        } else if (data.statusCode !== 200) {
          this.paymnetSuccess = false;
          this.modalHeader = 'Sorry Something Went Wrong';
          this.modalConformation = 'Please, check form for errors';
          // console.log('Message:' + '' + data.statusCode + ' ' + data.toString());
        }
        // console.log('data', data);
      },
      // () => '',
      // () => ''
    );
  }
}
