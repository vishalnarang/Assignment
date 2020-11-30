import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHistoryComponent } from './user-history.component';
import { RouterModule, Routes } from '@angular/router';
import { UserHistoryService } from './user-history.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AddUserHistoryComponent } from './components/add-user-history/add-user-history.component';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const userHistoryRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userHistoryRoute),
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    UserHistoryComponent,
    AddUserHistoryComponent
  ],
  providers: [
    UserHistoryService
  ],
  entryComponents: [
    AddUserHistoryComponent
  ]
})
export class UserHistoryModule { }
