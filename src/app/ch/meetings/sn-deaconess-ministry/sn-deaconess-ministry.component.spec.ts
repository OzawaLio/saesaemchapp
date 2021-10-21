import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnDeaconessMinistryComponent } from './sn-deaconess-ministry.component';

describe('SnDeaconessMinistryComponent', () => {
  let component: SnDeaconessMinistryComponent;
  let fixture: ComponentFixture<SnDeaconessMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnDeaconessMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnDeaconessMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
