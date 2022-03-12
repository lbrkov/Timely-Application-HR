import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelyFormComponent } from './timely-form.component';

describe('TimelyFormComponent', () => {
  let component: TimelyFormComponent;
  let fixture: ComponentFixture<TimelyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
