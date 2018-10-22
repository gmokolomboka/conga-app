import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsUpComponent } from './is-up.component';

describe('IsUpComponent', () => {
  let component: IsUpComponent;
  let fixture: ComponentFixture<IsUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
