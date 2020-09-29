import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuitemReactiveComponent } from './add-menuitem-reactive.component';

describe('AddMenuitemReactiveComponent', () => {
  let component: AddMenuitemReactiveComponent;
  let fixture: ComponentFixture<AddMenuitemReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuitemReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuitemReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
