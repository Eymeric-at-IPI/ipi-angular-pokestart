import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptDropdownButtonComponent } from './adopt-dropdown-button.component';

describe('AdoptDropdownButtonComponent', () => {
  let component: AdoptDropdownButtonComponent;
  let fixture: ComponentFixture<AdoptDropdownButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptDropdownButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
