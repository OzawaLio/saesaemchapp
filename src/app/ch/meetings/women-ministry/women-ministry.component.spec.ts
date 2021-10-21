import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenMinistryComponent } from './women-ministry.component';

describe('WomenMinistryComponent', () => {
  let component: WomenMinistryComponent;
  let fixture: ComponentFixture<WomenMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenMinistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
