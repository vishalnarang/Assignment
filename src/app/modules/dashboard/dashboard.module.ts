import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user-history',
        loadChildren: '../user-history/user-history.module#UserHistoryModule',
        data: { preload: true }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-history'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    HeaderModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
