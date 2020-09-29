import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';

@Component({
  selector: 'app-add-menuitem',
  templateUrl: './add-menuitem.component.html',
  styleUrls: ['./add-menuitem.component.css']
})
export class AddMenuitemComponent implements OnInit {
  
  menuitem:Menu;

  constructor() {
    this.menuitem=new Menu();
   }

  ngOnInit(): void {
  }

}
