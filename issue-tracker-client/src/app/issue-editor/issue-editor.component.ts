import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Issue } from '../core/issue';

@Component({
  selector: 'app-issue-editor',
  templateUrl: './issue-editor.component.html',
  styleUrls: ['./issue-editor.component.scss'],
})
export class IssueEditorComponent implements OnInit {
  issueForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  get title(): FormControl {
    return this.issueForm.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.issueForm.get('description') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    if (!this.issueForm.valid) {
      return;
    }

    console.log(this.issueForm.value as Issue);
  }
}
