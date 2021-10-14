import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicBannerComponent } from './pic-banner.component';

describe('PicBannerComponent', () => {
  let component: PicBannerComponent;
  let fixture: ComponentFixture<PicBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
