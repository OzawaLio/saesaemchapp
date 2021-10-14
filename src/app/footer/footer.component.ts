import { Component, Input, OnInit } from '@angular/core';

import { NgbModule, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private modalService: NgbModal) { }

  openEmailRejectionPopup() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = '이메일주소 무단수집거부';
  }
}
/*
You can pass an existing component as content of the modal window.
In this case, if you're still using Angular 8 or older, 
remember to add the content component in the entryComponents section of your NgModule. 
For Angular 9 or newer, it's not needed anymore.
참조 : https://ng-bootstrap.github.io/#/components/modal/examples
*/
@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './rejection-unauthorized-email.html'
})
export class NgbdModalContent {
  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) { }
}
