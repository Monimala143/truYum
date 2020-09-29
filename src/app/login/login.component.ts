import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  lgfrm: FormBuilder;
  constructor(lgfrm: FormBuilder) { 
    this.lgfrm=lgfrm;
    this.loginForm=this.lgfrm.group({
      Username: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password: new FormControl('', [Validators.required,Validators.minLength(3) ,Validators.maxLength(30)]),
    });
  }
  get LoginForm(){
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

}
