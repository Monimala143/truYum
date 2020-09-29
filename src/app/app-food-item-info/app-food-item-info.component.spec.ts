import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFoodItemInfoComponent } from './app-food-item-info.component';

describe('AppFoodItemInfoComponent', () => {
  let component: AppFoodItemInfoComponent;
  let fixture: ComponentFixture<AppFoodItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFoodItemInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFoodItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
