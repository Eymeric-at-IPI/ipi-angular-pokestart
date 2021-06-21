import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardListComponent } from './poke-card-list.component';

describe('PokeCardListComponent', () => {
  let component: PokeCardListComponent;
  let fixture: ComponentFixture<PokeCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
