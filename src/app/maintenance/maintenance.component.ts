import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import {AppService} from '../app.service';
declare let $: any;
@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  @Input()
  maintenanceForm: FormGroup;
  @Input()
  showModal: boolean;
  inputNameError: string;
  inputAddressError: string;
  inputPhoneError: string;
  inputEmailError: string;
  inputTextError: string;
  emailSuccess: boolean;
  messageHeader: string;
  messageBody: string;
  @ViewChild('modal') modal: ElementRef;

  constructor(private formBuilder: FormBuilder, private appService: AppService) {
  }

  ngOnInit() {
    this.maintenanceForm = this.formBuilder.group({
      'tenName': ['', Validators.required],
      'appAddress': ['', Validators.required],
      'textArea': ['', Validators.required],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(10)]],
      'email': ['', [Validators.required, Validators.email, Validators.pattern('[^@]*@[^@]*')]]
    });
  }

  checkInputError() {
    if (this.maintenanceForm.controls.tenName.touched === false) {
      this.inputNameError = 'Name Required';
    } else {
      this.inputNameError = null;
    }
    if (this.maintenanceForm.controls.appAddress.touched === false) {
      this.inputAddressError = 'Property Address Required';
    } else {
      this.inputAddressError = null;
    }
    if (this.maintenanceForm.controls.phoneNumber.touched === false) {
      this.inputPhoneError = 'Phone Number Required';
    } else {
      this.inputPhoneError = null;
    }
    if (this.maintenanceForm.controls.email.touched === false) {
      this.inputEmailError = 'Email Address Required';
    } else {
      this.inputEmailError = null;
    }
    if (this.maintenanceForm.controls.textArea.touched === false) {
      this.inputTextError = 'Repair Issue Required';
    } else {
      this.inputTextError = null;
    }
  }
  sendEmail(data) {
    this.appService.sendMaintEmail(data.maintenanceForm.value).subscribe((data) => {
      console.log('data', data);
      if (data.success) {
        this.emailSuccess = true;
        this.messageHeader = 'Thank You';
        this.messageBody = 'We received your email';
        this.showInfoModal();
        this.maintenanceForm.reset();
      } else if (data.error) {
        this.emailSuccess = false;
        this.messageHeader = 'Error';
        this.messageBody = 'Something went wrong. Please, check your form and try again';
        this.showInfoModal();
      }
    });
  }

  showInfoModal() {
    $(this.modal.nativeElement).modal('show');
  }

    // onSubmit() {
  //   if (this.maintenanceForm.valid) {
  //
  //   }
  // }


}

