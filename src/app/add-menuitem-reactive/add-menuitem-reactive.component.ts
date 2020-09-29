import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, FormBuilder, Validators, NgForm} from '@angular/forms';
import {Menu} from '../menu';
@Component({
  selector: 'app-add-menuitem-reactive',
  templateUrl: './add-menuitem-reactive.component.html',
  styleUrls: ['./add-menuitem-reactive.component.css']
})
export class AddMenuitemReactiveComponent implements OnInit {
  additemForm: FormGroup;
  fb: FormBuilder;


  constructor(fb: FormBuilder) {
    this.fb = fb;
    this.additemForm =this.fb.group({
      id: new FormControl(101, [Validators.required]) ,
      name: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      price:new FormControl(0, [Validators.required]),
      category:new FormControl('',[Validators.required]),
      active:new FormControl([Validators.required]),
      freeDelivery:new FormControl(false),
      dateOfLaunch:new FormControl('01/01/2017', [Validators.required]),
      imageURL:new FormControl(''),
    });
   }

   get AdditemForm(){
     return this.additemForm.controls;
   }

  ngOnInit(): void {
  }

}
