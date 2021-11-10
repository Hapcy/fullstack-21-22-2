import { Component, OnInit } from '@angular/core';
import { Issue } from '../core/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [{
    title: 'Bad UTP Port',
    description: 'UTP Port doesn\'t work',
  }, {
    title: 'Bad Mouse',
    description: 'Mouse doesn\'t work',
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
