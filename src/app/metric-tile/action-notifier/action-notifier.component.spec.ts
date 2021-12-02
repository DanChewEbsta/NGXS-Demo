import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionNotifierComponent } from './action-notifier.component';

describe('ActionNotifierComponent', () => {
  let component: ActionNotifierComponent;
  let fixture: ComponentFixture<ActionNotifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionNotifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
