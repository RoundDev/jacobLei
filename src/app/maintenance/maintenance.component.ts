import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {
  @Input()
  maintenanceForm: FormGroup;
  inputError: string;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.maintenanceForm = this.formBuilder.group({
      'tenName': ['', Validators.required],
      'appAddress': ['', Validators.required],
      'textArea': ['', Validators.required],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(11)]],
      'emailAddress': ['', [Validators.required, Validators.email]]
    });
  }

  checkInputError() {
    if (this.maintenanceForm.controls.tenName.value === '') {
      this.inputError = 'Name Required';
    } else {
      this.inputError = null;
    }
  }
}
