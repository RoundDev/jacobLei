import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import {AppService} from '../app.service';


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
  @ViewChild('modalInfo') modal: ElementRef;

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
    if (this.maintenanceForm.controls.tenName.value === '') {
      this.inputNameError = 'Name Required';
    } else {
      this.inputNameError = null;
    }
    if (this.maintenanceForm.controls.appAddress.value === '') {
      this.inputAddressError = 'Property Address Required';
    } else {
      this.inputAddressError = null;
    }
    if (this.maintenanceForm.controls.phoneNumber.value === '') {
      this.inputPhoneError = 'Phone Number Required';
    } else {
      this.inputPhoneError = null;
    }
    if (this.maintenanceForm.controls.email.value === '') {
      this.inputEmailError = 'Email Address Required';
    } else {
      this.inputEmailError = null;
    }
    if (this.maintenanceForm.controls.textArea.value === '') {
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
        this.maintenanceForm.reset();
      } else if (data.error) {
        this.emailSuccess = false;
        this.messageHeader = 'Error';
        this.messageBody = 'Something went wrong. Please, check your form and try again';
      }
    });
  }

//   showInfoModal() {
// const modalInfo = document.getElementById('modal');
//     modalInfo.classList.add('modal-class');
//     modalInfo.classList.remove('modal-class');
//   }

    // onSubmit() {
  //   if (this.maintenanceForm.valid) {
  //
  //   }
  // }


}

