import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PicBannerComponent } from './body/pic-banner/pic-banner.component';
import { PicLocationComponent } from './body/pic-location/pic-location.component';
import { PicWorshipInfoComponent } from './body/pic-worship-info/pic-worship-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BodyComponent,
    PicBannerComponent,
    PicLocationComponent,
    PicWorshipInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
