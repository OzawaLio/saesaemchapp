import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosannaChoirComponent } from './hosanna-choir.component';

describe('HosannaChoirComponent', () => {
  let component: HosannaChoirComponent;
  let fixture: ComponentFixture<HosannaChoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HosannaChoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HosannaChoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
