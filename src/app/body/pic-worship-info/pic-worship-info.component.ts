import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-worship-info',
  templateUrl: './pic-worship-info.component.html',
  styleUrls: ['./pic-worship-info.component.css']
})
export class PicWorshipInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUrl(){
    return "(/src/assets/img/saesaemch_location.PNG)";
  }

}
