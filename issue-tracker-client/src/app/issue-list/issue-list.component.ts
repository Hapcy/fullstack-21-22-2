import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Issue } from '../core/issue';
import { IssueEditorComponent } from '../issue-editor/issue-editor.component';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss'],
})
export class IssueListComponent implements OnInit {
  issues?: Issue[];

  constructor(private issueService: IssueService, private dialog: MatDialog) {}

  async ngOnInit(): Promise<void> {
    this.issues = await this.issueService.getIssues();
  }

  async onEditIssue(issue: Issue) {
    const dialogRef = this.dialog.open(IssueEditorComponent, {
      width: '500px',
      data: issue,
    });

    const result: Issue = await dialogRef.afterClosed().toPromise();
    const editedIssue = await this.issueService.editIssue(issue.id!, result);

    this.issues?.splice(this.issues.indexOf(issue), 1, editedIssue);
  }

  async onCreateIssue() {
    const dialogRef = this.dialog.open(IssueEditorComponent, {
      width: '500px',
    });

    const result: Issue = await dialogRef.afterClosed().toPromise();
    const createdIssue = await this.issueService.createIssue(result);

    this.issues!.push(createdIssue);
  }
}
