import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodemChoirComponent } from './rodem-choir.component';

describe('RodemChoirComponent', () => {
  let component: RodemChoirComponent;
  let fixture: ComponentFixture<RodemChoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodemChoirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodemChoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
