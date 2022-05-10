import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'issues',
    component: IssueListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'issues/:issueId',
    component: IssueDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'landing',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
