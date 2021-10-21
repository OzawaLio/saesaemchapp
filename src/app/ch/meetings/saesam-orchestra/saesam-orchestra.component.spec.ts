import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaesamOrchestraComponent } from './saesam-orchestra.component';

describe('SaesamOrchestraComponent', () => {
  let component: SaesamOrchestraComponent;
  let fixture: ComponentFixture<SaesamOrchestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaesamOrchestraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaesamOrchestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
