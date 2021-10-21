import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindersComponent } from './kinders.component';

describe('KindersComponent', () => {
  let component: KindersComponent;
  let fixture: ComponentFixture<KindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
