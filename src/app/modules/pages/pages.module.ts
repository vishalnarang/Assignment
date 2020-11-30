import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { SignupComponent } from './components/signup/signup.component';

const pagesRoute: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full',
  }
];




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesRoute),
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ]
})
export class PagesModule { }
