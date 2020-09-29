import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';
@Component({
  selector: 'app-list-menuitems',
  templateUrl: './list-menuitems.component.html',
  styleUrls: ['./list-menuitems.component.css']
})
export class ListMenuitemsComponent implements OnInit {

  menuList: Array<Menu>;
  constructor() {
    this.menuList = new Array<Menu>();
    let item1=new Menu();
    let item2=new Menu();
    let item3=new Menu();
    let item4=new Menu();
    let item5=new Menu();

    item1.id=101;
    item1.name='Sandwich';
    item1.price=129;
    item1.active=true;
    item1.imageURL='https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item1.freeDelivery=true;
    item1.category = 'Main Course';
    item1.dateOfLaunch='15/03/2017';

    item2.id=102;
    item2.name='Burger';
    item2.price=99;
    item2.active=true;
    item2.imageURL='https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item2.freeDelivery=false;
    item2.category = 'Main Course';
    item2.dateOfLaunch='23/12/2017';
    
    item3.id=103;
    item3.name='Pizza';
    item3.price=149;
    item3.active=true;
    item3.imageURL='https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item3.freeDelivery=true;
    item3.category = 'Main Course';
    item3.dateOfLaunch='21/08/2017';

    item4.id=104;
    item4.name='French Fries';
    item4.price=59;
    item4.active=false;
    item4.imageURL='https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item4.freeDelivery=false;
    item4.category = 'Starter';
    item4.dateOfLaunch='02/07/2017';

    item5.id=105;
    item5.name='Chocolate Brownie';
    item5.price=32;
    item5.active=true;
    item5.imageURL='https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';
    item5.freeDelivery=true;
    item5.category = 'Dessert';
    item5.dateOfLaunch='02/11/2014';

    this.menuList.push(item1);
    this.menuList.push(item2);
    this.menuList.push(item3);
    this.menuList.push(item4);

  

}  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}