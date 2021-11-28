import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PastorIntroComponent } from './ch/chInfo/pastor-intro/pastor-intro.component';
import { VisionComponent } from './ch/chInfo/vision/vision.component';
import { ChurchEventComponent } from './ch/gallery/church-event/church-event.component';
import { NewFamilyComponent } from './ch/gallery/new-family/new-family.component';
import { ServiceHistoryComponent } from './ch/service/service-history/service-history.component';
import { ServiceInfoComponent } from './ch/service/service-info/service-info.component';
import { DefaultComponent } from './ch/default/default.component';
import { EduMinistryComponent } from './ch/gallery/edu-ministry/edu-ministry.component';
import { MissionMinistryComponent } from './ch/gallery/mission-ministry/mission-ministry.component';
import { ClubsComponent } from './ch/gallery/clubs/clubs.component';
import { KindersComponent } from './ch/chSchool/kinders/kinders.component';
import { ElementsComponent } from './ch/chSchool/elements/elements.component';
import { YouthsComponent } from './ch/chSchool/youths/youths.component';
import { SinglesComponent } from './ch/chSchool/singles/singles.component';
import { MenMinistryComponent } from './ch/meetings/men-ministry/men-ministry.component';
import { WomenMinistryComponent } from './ch/meetings/women-ministry/women-ministry.component';
import { SnDeaconessMinistryComponent } from './ch/meetings/sn-deaconess-ministry/sn-deaconess-ministry.component';
import { ChurchWorkersComponent } from './ch/chInfo/church-workers/church-workers.component';
import { ChurchHistoryComponent } from './ch/chInfo/church-history/church-history.component';
import { LocationComponent } from './ch/chInfo/location/location.component';
import { HosannaChoirComponent } from './ch/meetings/hosanna-choir/hosanna-choir.component';
import { RodemChoirComponent } from './ch/meetings/rodem-choir/rodem-choir.component';
import { SaesamOrchestraComponent } from './ch/meetings/saesam-orchestra/saesam-orchestra.component';

import { NgMaterialModule } from './ng-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PastorIntroComponent,
    VisionComponent,
    ChurchEventComponent,
    NewFamilyComponent,
    ServiceHistoryComponent,
    ServiceInfoComponent,
    DefaultComponent,
    EduMinistryComponent,
    MissionMinistryComponent,
    ClubsComponent,
    KindersComponent,
    ElementsComponent,
    YouthsComponent,
    SinglesComponent,
    MenMinistryComponent,
    WomenMinistryComponent,
    SnDeaconessMinistryComponent,
    ChurchWorkersComponent,
    ChurchHistoryComponent,
    LocationComponent,
    HosannaChoirComponent,
    RodemChoirComponent,
    SaesamOrchestraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
