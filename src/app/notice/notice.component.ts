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
    });
  }

}
