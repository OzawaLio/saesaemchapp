import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicWorshipInfoComponent } from './pic-worship-info.component';

describe('PicWorshipInfoComponent', () => {
  let component: PicWorshipInfoComponent;
  let fixture: ComponentFixture<PicWorshipInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicWorshipInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicWorshipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
