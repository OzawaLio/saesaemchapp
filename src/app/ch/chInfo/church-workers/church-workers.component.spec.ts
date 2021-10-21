import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchWorkersComponent } from './church-workers.component';

describe('ChurchWorkersComponent', () => {
  let component: ChurchWorkersComponent;
  let fixture: ComponentFixture<ChurchWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChurchWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChurchWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
