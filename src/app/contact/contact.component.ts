import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
@Input()
contactForm: FormGroup;
  nameError: string;
  appAddressError: string;
  phoneNumberError: string;
  emailAddressError: string;
  textAreaError: string;
  emailSuccess: boolean;
  messageHeader: string;
  messageBody: string;

  constructor(private formBuilder: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      'tenName': ['', Validators.required],
      'appAddress': ['', Validators.required],
      'textArea': ['', Validators.required],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(11)]],
      'emailAddress': ['', [Validators.required, Validators.email, Validators.pattern('[^@]*@[^@]*')]]
    });
  }

  checkInputError() {
    if (this.contactForm.controls.tenName.value === '') {
      this.nameError = 'Name Required';
    } else {
      this.nameError = null;
    }
    if (this.contactForm.controls.appAddress.value === '') {
      this.appAddressError = 'Address Required';
    } else {
      this.appAddressError = null;
    }
    if (this.contactForm.controls.phoneNumber.value === '') {
      this.phoneNumberError = 'Address Required';
    } else {
      this.phoneNumberError = null;
    }
    if (this.contactForm.controls.emailAddress.value === '') {
      this.emailAddressError = 'Address Required';
    } else {
      this.emailAddressError = null;
    }
    if (this.contactForm.controls.textArea.value === '') {
      this.textAreaError = 'Address Required';
    } else {
      this.textAreaError = null;
    }
  }

  sendEmail(data) {
    this.appService.sendContacEmail(data.contactForm.value).subscribe((data) => {
      console.log('data', data);
      if (data.success) {
        this.emailSuccess = true;
        this.messageHeader = 'Thank You';
        this.messageBody = 'We received your email';
        this.contactForm.reset();
      } else if (data.error) {
        this.emailSuccess = false;
        this.messageHeader = 'Error';
        this.messageBody = 'Something went wrong. Please, check your form and try again';
      }
    });
  }

}
