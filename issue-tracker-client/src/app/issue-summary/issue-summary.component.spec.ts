import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { race, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { IssueStatus } from '../core/issue';
import { UserRole } from '../core/user';
import { UserService } from '../core/user.service';

import { IssueSummaryComponent } from './issue-summary.component';

describe('IssueSummaryComponent', () => {
  let component: IssueSummaryComponent;
  let fixture: ComponentFixture<IssueSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [IssueSummaryComponent],
      providers: [{ provide: UserService, useValue: { isAdmin: true } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSummaryComponent);
    component = fixture.componentInstance;

    component.issue = {
      title: 'Rossz projektor',
      description: 'asd',
      place: 'asd',
      status: IssueStatus.Done,
      user: {
        name: 'Tibi',
        role: UserRole.User,
      },
    };
    component.showButtons = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title of the issue', () => {
    const titleParagraph = fixture.debugElement.query(By.css('#title'));
    expect(titleParagraph.nativeElement.textContent).toBe(
      'Title: Rossz projektor'
    );
  });

  it('should emit editIssue when clicking on edit issue', (done) => {
    race(
      component.editIssue.pipe(map(() => true)),
      timer(500).pipe(map(() => false)),
    ).subscribe((result) => {
      expect(result).toBe(true);
      done();
    });

    const editIssueButton = fixture.debugElement.query(By.css('#edit-issue'));
    editIssueButton.triggerEventHandler('click', null);
  });
});
