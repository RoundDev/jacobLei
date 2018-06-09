import {Component, OnInit, Input} from '@angular/core';
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
  inputError: string;
  constructor(private formBuilder: FormBuilder,private appService:AppService) {
  }

  ngOnInit() {
    this.maintenanceForm = this.formBuilder.group({
      'tenName': ['', Validators.required],
      'appAddress': ['', Validators.required],
      'textArea': ['', Validators.required],
      'phoneNumber': ['', [Validators.required, Validators.maxLength(11)]],
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  checkInputError() {
    if (this.maintenanceForm.controls.tenName.value === '') {
      this.inputError = 'Name Required';
    } else {
      this.inputError = null;
    }
  }

  sendEmail(data){
    console.log('in component',data);
    this.appService.sendMaintEmail(JSON.stringify(data.maintenanceForm.value)).subscribe((data) => {
      console.log(data);
    });
  }

}
