import { Injectable } from '@angular/core';
import { Issue } from './core/issue';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  issues: Issue[] = [
    {
      id: 1,
      title: 'Bad UTP Port',
      description: "UTP Port doesn't work",
      place: '2-202',
      user: 'Tibor',
    },
    {
      id: 2,
      title: 'Bad Mouse',
      description: "Mouse doesn't work",
      place: 'É-1.75',
      user: 'Béla',
    },
  ];

  private _currentId: number = 100;

  constructor() {}

  async getIssues(): Promise<Issue[]> {
    return this.issues;
  }

  async getIssue(id: number): Promise<Issue | undefined> {
    return this.issues.find((issue) => issue.id === id);
  }

  async createIssue(issue: Issue): Promise<Issue> {
    issue.id = this._currentId;
    this._currentId++;
    this.issues.push(issue);
    return issue;
  }

  async editIssue(issueId: number, issue: Issue): Promise<Issue> {
    const issueIndex = this.issues.findIndex((issue) => issue.id === issueId);
    const modifiedIssue = {
      ...this.issues[issueIndex],
      ...issue,
    };
    this.issues.splice(issueIndex, 1, modifiedIssue);
    return modifiedIssue;
  }
}
