import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-church-workers',
  templateUrl: './church-workers.component.html',
  styleUrls: ['./church-workers.component.css']
})
export class ChurchWorkersComponent implements OnInit {
  pastors: Array<StringMap> = [
    {img: 'assets/img/churchworkers/pastor_jojonggun.jpg', name: '조종건', position: '담임목사'},
    {img: 'assets/img/churchworkers/pastor_parkwoohee.jpg', name: '박우희', position: '명예목사'},
    {img: 'assets/img/churchworkers/pastor_yangsunglan.jpg', name: '양성란', position: '부목사'},
  ];

  juniorPastors: Array<StringMap> = [
    {img: 'assets/img/churchworkers/junior_shinmungchul.jpg', name: '신명철', position: '전도사'},
    {img: 'assets/img/churchworkers/junior_parkhanoung.jpg', name: '박한웅', position: '전도사'},
  ];

  elders: Array<StringMap> = [
    {img: 'assets/img/churchworkers/elder_leehanbong.jpg', name: '이한봉', position: '시무장로'},
    {img: 'assets/img/churchworkers/elder_parkdongjin.jpg', name: '박동진', position: '시무장로'},
    {img: 'assets/img/churchworkers/elder_kimjongsup.jpg', name: '김종섭', position: '시무장로'},
    {img: 'assets/img/churchworkers/elder_jongguesou.jpg', name: '정규서', position: '시무장로'},
    {img: 'assets/img/churchworkers/elder_kimchangmin.jpg', name: '김창민', position: '시무장로'},
    {img: 'assets/img/churchworkers/elder_gojaeyong.jpg', name: '고재용', position: '시무장로'},
    {img: 'assets/img/churchworkers/elder_joungyoungchul.jpg', name: '정영철', position: '시무장로'},
  ];

  honoraryElders: Array<StringMap> = [
    {img: 'assets/img/churchworkers/honor_parkjongjin.jpg', name: '박종진', position: '명예장로'},
    {img: 'assets/img/churchworkers/honor_parkchangdae.jpg', name: '박창대', position: '명예장로'},
    {img: 'assets/img/churchworkers/honor_leegwangli.jpg', name: '이광일', position: '명예장로'},
    {img: 'assets/img/churchworkers/honor_umgisik.jpg', name: '엄기식', position: '명예장로'},
  ];


  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }

}
