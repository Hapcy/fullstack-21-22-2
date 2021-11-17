import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueSummaryComponent } from './issue-summary.component';

describe('IssueSummaryComponent', () => {
  let component: IssueSummaryComponent;
  let fixture: ComponentFixture<IssueSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
