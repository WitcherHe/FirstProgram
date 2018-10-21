import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GundamTagsComponent } from './gundam-tags.component';

describe('GundamTagsComponent', () => {
  let component: GundamTagsComponent;
  let fixture: ComponentFixture<GundamTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GundamTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GundamTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
