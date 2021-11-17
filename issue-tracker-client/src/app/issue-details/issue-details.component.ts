import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Issue } from '../core/issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss'],
})
export class IssueDetailsComponent implements OnInit {
  issue?: Issue;

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit(): Promise<void> {
    const issueId = this.route.snapshot.paramMap.get('issueId');
    if (issueId) {
      this.issue = await this.issueService.getIssue(parseInt(issueId));
    }
  }
}
