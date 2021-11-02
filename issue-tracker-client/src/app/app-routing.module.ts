import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueEditorComponent } from './issue-editor/issue-editor.component';
import { IssueListComponent } from './issue-list/issue-list.component';

const routes: Routes = [
  {
    path: 'issue-list',
    component: IssueListComponent,
  },
  {
    path: 'issue-editor',
    component: IssueEditorComponent,
  },
  {
    path: '**',
    redirectTo: 'issue-list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
