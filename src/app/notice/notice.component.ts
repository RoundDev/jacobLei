import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  public phoneNumberModel = '';
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  @Input()
  noticeForm: FormGroup;
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
    this.noticeForm = this.formBuilder.group({
      'tenName': ['', Validators.required],
      'appAddress': ['', Validators.required],
      'textArea': ['', Validators.required],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(15)]],
      'emailAddress': ['', [Validators.required, Validators.email, Validators.pattern('[^@]*@[^@]*')]]
    });
  }

  checkInputError() {
    if (this.noticeForm.controls.tenName.value === '') {
      this.nameError = 'Name Required';
    } else {
      this.nameError = null;
    }
    if (this.noticeForm.controls.appAddress.value === '') {
      this.appAddressError = 'Address Required';
    } else {
      this.appAddressError = null;
    }
    if (this.noticeForm.controls.phoneNumber.value === '') {
      this.phoneNumberError = 'Address Required';
    } else {
      this.phoneNumberError = null;
    }
    if (this.noticeForm.controls.emailAddress.value === '') {
      this.emailAddressError = 'Address Required';
    } else {
      this.emailAddressError = null;
    }
    if (this.noticeForm.controls.textArea.value === '') {
      this.textAreaError = 'Address Required';
    } else {
      this.textAreaError = null;
    }
  }

  sendEmail(data) {
    this.appService.sendNoticeEmail(data.noticeForm.value).subscribe((data) => {
      console.log('data', data);
      if (data.success) {
        this.emailSuccess = true;
        this.messageHeader = 'Thank You';
        this.messageBody = 'We received your email';
        this.noticeForm.reset();
      } else if (data.error) {
        this.emailSuccess = false;
        this.messageHeader = 'Error';
        this.messageBody = 'Something went wrong. Please, check your form and try again';
      }
    });
  }

}
