import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueEditorComponent } from './issue-editor.component';

describe('IssueEditorComponent', () => {
  let component: IssueEditorComponent;
  let fixture: ComponentFixture<IssueEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
