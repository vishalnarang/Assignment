import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { UserHistoryService } from './user-history.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddUserHistoryComponent } from './components/add-user-history/add-user-history.component';


@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css','./../pages/components/login/login.component.css']
})
export class UserHistoryComponent implements OnInit {
  public list: any;
  public name: any;

  constructor(public commonService: CommonService,
    public userHistoryService: UserHistoryService,
    public dialog: MatDialog) { }

  ngOnInit() {
    if (localStorage.getItem('email_id')) {
      let email_id = JSON.parse(localStorage.getItem('email_id'));
      this.getHistory(email_id);
      this.getUser(email_id)
    }
  }

  getHistory(email) {
    this.commonService.showLoader = true;
    this.userHistoryService.userHistory(email).subscribe((response: any) => {
      this.commonService.showLoader = false;
      console.log(response, "/past_jobs")
      if(response){
        this.list = response.past_jobs;
      }
    }, error => {
      this.commonService.showLoader = false;
    })
  }


  getUser(email) {
    this.commonService.showLoader = true;
    this.userHistoryService.user(email).subscribe((response: any) => {
      this.commonService.showLoader = false;
      if(response){
        this.name = response.name;
      }
    }, error => {
      this.commonService.showLoader = false;
    })
  }

  addUserHistory() {
    const dialogRef = this.dialog.open(AddUserHistoryComponent, {
      width: '580px',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, "?response")
    });
  }

}
