import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Issue } from '../core/issue';

@Component({
  selector: 'app-issue-editor',
  templateUrl: './issue-editor.component.html',
  styleUrls: ['./issue-editor.component.scss'],
})
export class IssueEditorComponent implements OnInit {
  issueForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    place: ['', Validators.required],
    description: ['', Validators.required],
  });

  get title(): FormControl {
    return this.issueForm.get('title') as FormControl;
  }

  get place(): FormControl {
    return this.issueForm.get('place') as FormControl;
  }

  get description(): FormControl {
    return this.issueForm.get('description') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<IssueEditorComponent>,
    @Inject(MAT_DIALOG_DATA) private issue: Issue
  ) {
    if (this.issue) {
      this.issueForm.reset(this.issue);
    }
  }

  ngOnInit(): void {}

  submit() {
    if (!this.issueForm.valid) {
      return;
    }

    this.dialogRef.close(this.issueForm.value as Issue);
  }
}
