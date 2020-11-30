import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public commonService: CommonService,
    public pagesService: PagesService,
    public router: Router) { }

  ngOnInit() {
    this.initLoginForm();
    this.commonService.showLoader = false;
  }


  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    })
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return this.commonService.validateAllFormFields(this.loginForm)
    }
    else{
      let body = {
        'email_id': this.loginForm.controls.email.value,
        'password': this.loginForm.controls.password.value
      }

      this.commonService.showLoader = true;
      this.pagesService.login(body).subscribe((response: any) => {
        this.commonService.showLoader = false;
        console.log(response.email_id, ">response.email_id");
        if(response){
          localStorage.setItem('email_id', JSON.stringify(response.email_id));
        }
        this.router.navigate(['/dashboard/user-history']);
      }, error => {
        this.commonService.showLoader = false;
        // this.showError
      })
    }
  }

}
