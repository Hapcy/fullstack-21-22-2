import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  message: FormControl = this.fb.control('', Validators.required);

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    const issueId = this.route.snapshot.paramMap.get('issueId');
    if (issueId) {
      this.issue = await this.issueService.getIssue(parseInt(issueId));
    }
  }

  async addMessage(): Promise<void> {
    if (this.message.invalid) {
      return;
    }
    const createdMessage = await this.issueService.addMessage(
      this.issue!,
      this.message.value
    );
    this.issue!.messages!.push(createdMessage);
    this.message.reset('');
  }
}
