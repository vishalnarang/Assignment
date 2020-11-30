
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'page',
    loadChildren: './modules/pages/pages.module#PagesModule',
    data: { preload: false },
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    data: { preload: false },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/page/login'
  },
  { path: '**', redirectTo: '/page/login' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
