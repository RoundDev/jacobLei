import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
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
  inputNameError: string;
  inputAddressError: string;
  inputPhoneError: string;
  inputEmailError: string;
  inputTextError: string;
  emailSuccess: boolean;
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
        this.maintenanceForm.reset();
      }
    });
  }
  // onSubmit() {
  //   if (this.maintenanceForm.valid) {
  //
  //   }
  // }


}

