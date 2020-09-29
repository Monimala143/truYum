import { Component, OnInit } from '@angular/core';
import { Menu} from '../menu';
@Component({
  selector: 'app-app-food-item-info',
  templateUrl: './app-food-item-info.component.html',
  styleUrls: ['./app-food-item-info.component.css']
})
export class AppFoodItemInfoComponent implements OnInit {
  
  menuitems:Menu;
  constructor() {
  
  }

  ngOnInit(): void {
  }

}
