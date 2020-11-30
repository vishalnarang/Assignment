import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { CommonService } from '../../../../services/common.service';
import { UserHistoryService } from '../../user-history.service';
@Component({
  selector: 'app-add-user-history',
  templateUrl: './add-user-history.component.html',
  styleUrls: ['./add-user-history.component.css', './../../../pages/components/login/login.component.css']
})
export class AddUserHistoryComponent implements OnInit {

  public addUserHistoryForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public fb: FormBuilder,
    public commonService: CommonService,
    public userHistoryService: UserHistoryService) { }

  ngOnInit() {
    this.commonService.showLoader = false;
    this.initForm();
  }

  initForm() {
    this.addUserHistoryForm = this.fb.group({
      'company_name': ['', [Validators.required]],
      'title': ['', [Validators.required]],
      'start_date': ['', [Validators.required]],
      'location': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'email_id': ['', [Validators.required]]
    })
  }

  addHistory() {
    if (this.addUserHistoryForm.invalid) {
      return this.commonService.validateAllFormFields(this.addUserHistoryForm);
    }
    else {
      let obj = {
        'company_name': this.addUserHistoryForm.controls.company_name.value,
        'title': this.addUserHistoryForm.controls.title.value,
        'start_date': this.addUserHistoryForm.controls.start_date.value,
        'location': this.addUserHistoryForm.controls.location.value,
        'description': this.addUserHistoryForm.controls.description.value,
        'email_id': this.addUserHistoryForm.controls.email_id.value
      }
      this.commonService.showLoader = true;
      this.userHistoryService.addUserHistory(obj).subscribe((response)=>{
        this.commonService.showLoader = false;
        this.dialog.closeAll();

      }, error => {
        this.commonService.showLoader = false;
      })
    }
  }





}