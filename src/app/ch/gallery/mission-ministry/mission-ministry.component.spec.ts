import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionMinistryComponent } from './mission-ministry.component';

describe('MissionMinistryComponent', () => {
  let component: MissionMinistryComponent;
  let fixture: ComponentFixture<MissionMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
