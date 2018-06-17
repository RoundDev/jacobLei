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
inputError: string;
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
      this.inputError = 'Name Required';
    } else {
      this.inputError = null;
    }
  }

  sendEmail(data) {
    this.appService.sendContacEmail(data.contactForm.value).subscribe((data) => {
      console.log('data', data);
    });
  }

}
