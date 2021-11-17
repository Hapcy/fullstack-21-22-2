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

  onEditIssue(issue: Issue) {
    const dialogRef = this.dialog.open(IssueEditorComponent, {
      width: '500px',
      data: issue,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.issueService.editIssue(issue.id, result);
    });
  }

  onCreateIssue() {
    const dialogRef = this.dialog.open(IssueEditorComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.issueService.createIssue(result);
    });
  }
}
