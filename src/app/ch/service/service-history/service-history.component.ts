import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-service-history',
  templateUrl: './service-history.component.html',
  styleUrls: ['./service-history.component.css']
})
export class ServiceHistoryComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['title', 'time', 'testament', 'preacher', 'link'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }
}

export interface PeriodicElement {
  title: string;
  time: string;
  testament: string;
  preacher: string;
  link: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" },
  { title: '주일2부 예배', time: '10월 31일', testament: "요한복음 4:19-24", preacher: "조종건 목사", link: "https://youtu.be/aGtIfyg1HwI" }
];
