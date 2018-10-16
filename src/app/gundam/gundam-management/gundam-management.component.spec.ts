import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamManagementComponent } from './gundam-management.component';

describe('GundamManagementComponent', () => {
  let component: GundamManagementComponent;
  let fixture: ComponentFixture<GundamManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GundamManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GundamManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
