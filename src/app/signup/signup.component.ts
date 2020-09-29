import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {User} from '../user';
@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {
  signupFrom: FormGroup;

  error_messages = {
    'Username': [
      { type: 'required', message: 'User Name is required.' },
    ],

    'firstName': [
      { type: 'required', message: 'First Name is required.' }
    ],

    'lastName': [
      { type: 'required', message: 'Last Name is required.' }
    ],

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' },
      { type: 'maxlength', message: 'password length.' }
    ],
  }

  constructor(public formBuilder: FormBuilder) {
  this.signupFrom=this.formBuilder.group({
    Username:new FormControl('', Validators.compose([Validators.required])),
    firstName:new FormControl('', Validators.compose([Validators.required])),
    lastName:new FormControl('', Validators.compose([Validators.required])),
    password:new FormControl('', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30)])),
    confirmPassword:new FormControl('', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(30)])),
    }, 
    {
      validators: this.password.bind(this)
    });

  
  }

  ngOnInit(): void {
  }

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
}
