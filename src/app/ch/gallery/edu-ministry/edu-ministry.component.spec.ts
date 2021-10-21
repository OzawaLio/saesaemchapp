import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduMinistryComponent } from './edu-ministry.component';

describe('EduMinistryComponent', () => {
  let component: EduMinistryComponent;
  let fixture: ComponentFixture<EduMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
