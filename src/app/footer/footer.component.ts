import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(public dialog: MatDialog) {}

  openEmailRejectionDialog(){
    const dialogRef = this.dialog.open(EmailRejectionDialog, {
      width: '600px'
    });
  }
}

@Component({
  selector: 'email-rejection-dialog',
  templateUrl: './rejection-unauthorized-email.html'
})
export class EmailRejectionDialog {}
