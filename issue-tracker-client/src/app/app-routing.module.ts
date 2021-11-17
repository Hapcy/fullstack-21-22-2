import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueListComponent } from './issue-list/issue-list.component';

const routes: Routes = [
  {
    path: 'issues',
    component: IssueListComponent,
  },
  {
    path: 'issues/:issueId',
    component: IssueDetailsComponent,
  },
  {
    path: '**',
    redirectTo: 'issues',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
