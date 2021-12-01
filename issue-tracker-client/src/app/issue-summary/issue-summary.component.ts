import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Issue } from '../core/issue';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-issue-summary',
  templateUrl: './issue-summary.component.html',
  styleUrls: ['./issue-summary.component.scss'],
})
export class IssueSummaryComponent implements OnInit {
  @Input() issue!: Issue;
  @Input() showButtons: boolean = false;

  @Output() editIssue: EventEmitter<void> = new EventEmitter();

  constructor(public userService: UserService) {}

  ngOnInit(): void {}

  edit() {
    this.editIssue.emit();
  }
}
