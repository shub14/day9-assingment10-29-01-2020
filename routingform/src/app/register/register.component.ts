import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  invalidRegister = false;
  constructor(private router: Router, private formBuilder: FormBuilder ) { }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
      } else {
      this.invalidRegister = true;
      this.router.navigateByUrl('/form');
       }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      Name: ['', [Validators.required, Validators.pattern( '[a-zA-Z ]*')]],
      MobileNo: ['', [Validators.required, Validators.pattern( '^((\\+91-?)|0)?[0-9]{10}$')]],
      Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
  });
  }
}
