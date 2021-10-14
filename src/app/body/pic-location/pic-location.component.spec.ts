import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicLocationComponent } from './pic-location.component';

describe('PicLocationComponent', () => {
  let component: PicLocationComponent;
  let fixture: ComponentFixture<PicLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
