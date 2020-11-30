import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../../services/common.service';
import { PagesService } from '../../services/pages.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './../login/login.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public commonService: CommonService,
    public pagesService: PagesService) { }

  ngOnInit() {
    this.initLoginForm();
  }


  initLoginForm() {
    this.signupForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]],
      'name': ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      return this.commonService.validateAllFormFields(this.signupForm)
    }
    else {
      let body = {
        'name': this.signupForm.controls.name.value,
        'email_id': this.signupForm.controls.email.value,
        'password': this.signupForm.controls.password.value
      }

      this.commonService.showLoader = true;
      this.pagesService.signup(body).subscribe((response) => {
        this.commonService.showLoader = true;
        console.log(response, "vresponseresponse")

      }, error => {
        this.commonService.showLoader = false;
        // this.showError
      })

    }
  }
}
