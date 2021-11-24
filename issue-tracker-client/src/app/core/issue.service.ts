import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Issue } from './issue';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  constructor(private httpClient: HttpClient) {}

  async getIssues(): Promise<Issue[]> {
    return (
      this.httpClient.get('/api/issues') as Observable<Issue[]>
    ).toPromise();
  }

  async getIssue(id: number): Promise<Issue | undefined> {
    return (
      this.httpClient.get(`/api/issues/${id}`) as Observable<Issue>
    ).toPromise();
  }

  async createIssue(issue: Issue): Promise<Issue> {
    const createdIssue = await (
      this.httpClient.post('/api/issues', issue) as Observable<Issue>
    ).toPromise();
    return createdIssue;
  }

  async editIssue(issueId: number, issue: Issue): Promise<Issue> {
    const modifiedIssue = await (
      this.httpClient.patch(
        `/api/issues/${issueId}`,
        issue
      ) as Observable<Issue>
    ).toPromise();
    return modifiedIssue;
  }

  async addMessage(issue: Issue, message: string): Promise<Message> {
    const createdMessage = await this.httpClient
      .post<Message>(`/api/issues/${issue.id}/messages`, { text: message })
      .toPromise();
    return createdMessage;
  }
}
