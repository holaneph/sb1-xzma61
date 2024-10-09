import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { UserDashboardComponent } from './user/user-dashboard.component';
import { BusinessDashboardComponent } from './business/business-dashboard.component';
import { BusinessCardsComponent } from './business/business-cards.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'business/dashboard', component: BusinessDashboardComponent },
  { path: 'business/cards', component: BusinessCardsComponent },
  { path: 'admin', component: AdminDashboardComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}