import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
@Input()
noticeForm: FormGroup;
  inputError: string;
  emailSuccess: boolean;
  messageHeader: string;
  messageBody: string;
  constructor(private formBuilder: FormBuilder, private appService: AppService) { }

  ngOnInit() {
    this.noticeForm = this.formBuilder.group({
      'tenName': ['', Validators.required],
      'appAddress': ['', Validators.required],
      'textArea': ['', Validators.required],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(11)]],
      'emailAddress': ['', [Validators.required, Validators.email, Validators.pattern('[^@]*@[^@]*')]]
    });
  }

  checkInputError() {
    if (this.noticeForm.controls.tenName.value === '') {
      this.inputError = 'Name Required';
    } else {
      this.inputError = null;
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
