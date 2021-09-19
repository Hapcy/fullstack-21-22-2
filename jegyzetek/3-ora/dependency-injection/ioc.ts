class Issue {
  id!: number;
}

abstract class IssueStore {
  abstract getIssue(id: number): Promise<Issue>;
}

class InMemoryIssueStore extends IssueStore {
  issues: Issue[] = [];

  override getIssue(id: number): Promise<Issue> {
    const issue = this.issues.find((issue) => issue.id === id);
    if (issue) {
      return Promise.resolve(issue);
    } else {
      throw 404;
    }
  }
}

class DatabaseIssueStore extends IssueStore {
  db!: any;

  async getIssue(id: number): Promise<Issue> {
    const issue = await this.db.executeSql(
      `SELECT * FROM issues WHERE issue.id = ${id}`,
    );
    if (issue) {
      return issue;
    } else {
      throw 404;
    }
  }
}

class IssueService {
  constructor(private _issueStore: IssueStore) {}
  // ...
}

// Példa 1
class IssueApp {
  private _issueService: IssueService;
  private _issueStore: IssueStore;

  constructor() {
    this._issueStore = new InMemoryIssueStore();
    this._issueService = new IssueService(this._issueStore);
  }
}

// Példa 2
const services = [
  { provide: 'issueStore', useClass: InMemoryIssueStore },
  { provide: 'issueService', useClass: IssueService, deps: ['issueStore'] },
];

// Példa 3
// Használjunk decoratorokat
const services2  = [
  { provide: IssueStore, useClass: InMemoryIssueStore },
  IssueService,
];
