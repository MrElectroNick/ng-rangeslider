import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRangesliderComponent } from './ng-rangeslider.component';

describe('NgRangesliderComponent', () => {
  let component: NgRangesliderComponent;
  let fixture: ComponentFixture<NgRangesliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRangesliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRangesliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
