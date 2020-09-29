import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMenuitemsComponent } from './list-menuitems.component';

describe('ListMenuitemsComponent', () => {
  let component: ListMenuitemsComponent;
  let fixture: ComponentFixture<ListMenuitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMenuitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMenuitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
