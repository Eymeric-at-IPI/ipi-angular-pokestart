import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptListComponent } from './adopt-list.component';

describe('AdoptListComponent', () => {
  let component: AdoptListComponent;
  let fixture: ComponentFixture<AdoptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
