import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTileComponent } from './selected-tile.component';

describe('SelectedTileComponent', () => {
  let component: SelectedTileComponent;
  let fixture: ComponentFixture<SelectedTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
