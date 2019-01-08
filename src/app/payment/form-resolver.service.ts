import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {of} from 'rxjs/internal/observable/of';

declare var SqPaymentForm: any;


@Injectable()
export class FormResolver implements Resolve<any> {
  //
  // SqPaymentForm: any;
  paymentForm;

  constructor(
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let vm;
    vm = this;
    // this.calculatePayment();
    const applicationId = 'sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw';

    // Set the location ID
    const locationId = 'CBASEDepGeN6Eev-N-FYE90UA1sgAQ';
    this.paymentForm = new SqPaymentForm({

      // Initialize the payment form elements
      applicationId: applicationId,
      locationId: locationId,
      inputClass: 'sq-input',
      // autoBuild : false,

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
        elementId: 'sq-postal-code'
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
        cardNonceResponseReceived: function (errors, nonce, cardData)  {
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            console.log('Encountered errors:');
            errors.forEach(function(error) {
              console.log('  ' + error.message);
            });

            return;
          }

          alert('Nonce received: ' + nonce); /* FOR TESTING ONLY */

          // Assign the nonce value to the hidden form field
          // document.getElementById('card-nonce').value = nonce;
          // needs to be extracted from the
          (<HTMLInputElement>document.getElementById('card-nonce')).value = nonce; // casting so .value will work

          let amount = (<HTMLInputElement>document.getElementById('amountToPay')).value;
          // get this value from the database when the user is logged in
          // (<HTMLInputElement>document.getElementById('sq-id')).value = "sandbox-sq0idp-par5NbRuDfbBOcgNv5j3sw" // "CBASEC8F-Phq5_pV7UNi64_kX_4gAQ";

          // POST the nonce form to the payment processing page
          // (<HTMLFormElement>document.getElementById('nonce-form')).submit();
          vm.sendSqPayment({'nonce': nonce, 'amountToPay': amount});
        },

        /*
         * callback function: unsupportedBrowserDetected
         * Triggered when: the page loads and an unsupported browser is detected
         */
        unsupportedBrowserDetected: function() {
          alert('Your browser seems to be unsupported for card processing. Please try a different browser.');
        },

        /*
         * callback function: inputEventReceived
         * Triggered when: visitors interact with SqPaymentForm iframe elements.
         */
        inputEventReceived: function(inputEvent) {
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
        paymentFormLoaded: function() {
          /* HANDLE AS DESIRED */
          console.log('The form loaded!');
        }
      }
    });
    return of(this.paymentForm);
  //   return this.userService.searchUsers('', 0, 25, '', '')
  // .pipe(
  //     take(1),
  //     map(users => {
  //       return users;
  //     })
  //   );
  }
}
