import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

loginForm: FormGroup;
submitted = false;
invalidLogin = false;

constructor(private formBuilder: FormBuilder) { }

onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
         return;
       }
    if (this.loginForm.controls.email.value === 'shubham@gmail.com'  && this.loginForm.controls.password.value === 'password') {
    alert('login successful');
    } else {
     this.invalidLogin = true;
   }
  }
ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.pattern( '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,16}$')]]
    });
  }

}
