import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptListItemComponent } from './adopt-list-item.component';

describe('AdoptListItemComponent', () => {
  let component: AdoptListItemComponent;
  let fixture: ComponentFixture<AdoptListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
