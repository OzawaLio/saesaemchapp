import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {
  mServiceInfo!: Array<any>;
  sServiceInfo!: Array<any>;

  constructor() {
    this.mServiceInfo = [
      { name: '새벽기도회', time: '(월~금) 오전 05:30', place: '1층 소예배실' },
      { name: '주일예배 1부', time: '(주일) 오전 09:00', place: '3층 본당' },
      { name: '주일예배 2부', time: '(주일) 오전 11:00', place: '3층 본당' },
      { name: '주일오후예배', time: '(주일) 오후 02:00', place: '3층 본당' },
      { name: '수요저녁예배', time: '(수) 오후 07:30', place: '3층 본당' },
      { name: '금요기도회', time: '(금) 오후 09:00', place: '3층 본당' },
      { name: '구역예배', time: '매주 주간중', place: '각 구역별' }
    ]

    this.sServiceInfo = [
      { name: '유치부', time: '(주일) 오전 11:00', place: '2층 유치부실' },
      { name: '초등부', time: '(주일) 오전 11:00', place: '지하1층 초등부실' },
      { name: '중고등부', time: '(주일) 오전 11:00', place: '1층 소예배실' },
      { name: '청년부', time: '(주일) 오후 01:00', place: '1층 소예배실' }
    ]
   }

  ngOnInit(): void {
  }

}
