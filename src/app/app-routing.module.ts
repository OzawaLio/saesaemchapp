import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { RouterModule, Routes } from '@angular/router';
import { ChurchHistoryComponent } from './ch/chInfo/church-history/church-history.component';
import { ChurchWorkersComponent } from './ch/chInfo/church-workers/church-workers.component';
import { LocationComponent } from './ch/chInfo/location/location.component';
import { PastorIntroComponent } from './ch/chInfo/pastor-intro/pastor-intro.component';
import { VisionComponent } from './ch/chInfo/vision/vision.component';
import { ElementsComponent } from './ch/chSchool/elements/elements.component';
import { KindersComponent } from './ch/chSchool/kinders/kinders.component';
import { SinglesComponent } from './ch/chSchool/singles/singles.component';
import { YouthsComponent } from './ch/chSchool/youths/youths.component';
import { DefaultComponent } from './ch/default/default.component';
import { ChurchEventComponent } from './ch/gallery/church-event/church-event.component';
import { ClubsComponent } from './ch/gallery/clubs/clubs.component';
import { EduMinistryComponent } from './ch/gallery/edu-ministry/edu-ministry.component';
import { MissionMinistryComponent } from './ch/gallery/mission-ministry/mission-ministry.component';
import { NewFamilyComponent } from './ch/gallery/new-family/new-family.component';
import { HosannaChoirComponent } from './ch/meetings/hosanna-choir/hosanna-choir.component';
import { MenMinistryComponent } from './ch/meetings/men-ministry/men-ministry.component';
import { RodemChoirComponent } from './ch/meetings/rodem-choir/rodem-choir.component';
import { SaesamOrchestraComponent } from './ch/meetings/saesam-orchestra/saesam-orchestra.component';
import { SnDeaconessMinistryComponent } from './ch/meetings/sn-deaconess-ministry/sn-deaconess-ministry.component';
import { WomenMinistryComponent } from './ch/meetings/women-ministry/women-ministry.component';
import { ServiceHistoryComponent } from './ch/service/service-history/service-history.component';
import { ServiceInfoComponent } from './ch/service/service-info/service-info.component';

const AppRoutes: Routes = [
  { path: '', component: DefaultComponent },

  { path: 'pastorIntro', component: PastorIntroComponent},
  { path: 'vision', component: VisionComponent},
  { path: 'churchWorkers', component: ChurchWorkersComponent},
  { path: 'churchHistory', component: ChurchHistoryComponent},
  { path: 'location', component: LocationComponent},

  { path: 'serviceInfo', component: ServiceInfoComponent},
  { path: 'serviceHistory', component: ServiceHistoryComponent},

  { path: 'newFamily', component: NewFamilyComponent},
  { path: 'churchEvent', component: ChurchEventComponent},
  { path: 'eduMinistry', component: EduMinistryComponent},
  { path: 'missionMinistry', component: MissionMinistryComponent},
  { path: 'clubs', component: ClubsComponent},

  { path: 'kinders', component: KindersComponent},
  { path: 'elements', component: ElementsComponent},
  { path: 'youths', component: YouthsComponent},
  { path: 'singles', component: SinglesComponent},

  { path: 'menMinistry', component: MenMinistryComponent},
  { path: 'womenMinistry', component: WomenMinistryComponent},
  { path: 'snDeaconessMinistry', component: SnDeaconessMinistryComponent},
  { path: 'hosannaChoir', component: HosannaChoirComponent},
  { path: 'rodemChoir', component: RodemChoirComponent},
  { path: 'saesamOrchestra', component: SaesamOrchestraComponent},

  { path: '**', redirectTo:'', pathMatch:'full' }
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash:true});
