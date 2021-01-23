import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsCardComponent } from './launch-details-card.component';

describe('LaunchDetailsCardComponent', () => {
  let component: LaunchDetailsCardComponent;
  let fixture: ComponentFixture<LaunchDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchDetailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
