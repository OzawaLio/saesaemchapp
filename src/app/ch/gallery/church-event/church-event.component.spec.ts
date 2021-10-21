import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchEventComponent } from './church-event.component';

describe('ChurchEventComponent', () => {
  let component: ChurchEventComponent;
  let fixture: ComponentFixture<ChurchEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
