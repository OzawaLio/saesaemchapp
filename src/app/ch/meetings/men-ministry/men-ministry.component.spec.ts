import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenMinistryComponent } from './men-ministry.component';

describe('MenMinistryComponent', () => {
  let component: MenMinistryComponent;
  let fixture: ComponentFixture<MenMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
