import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorIntroComponent } from './pastor-intro.component';

describe('PastorIntroComponent', () => {
  let component: PastorIntroComponent;
  let fixture: ComponentFixture<PastorIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastorIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastorIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
