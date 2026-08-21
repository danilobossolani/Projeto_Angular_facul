import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginanaoencontrada } from './paginanaoencontrada';

describe('Paginanaoencontrada', () => {
  let component: Paginanaoencontrada;
  let fixture: ComponentFixture<Paginanaoencontrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Paginanaoencontrada],
    }).compileComponents();

    fixture = TestBed.createComponent(Paginanaoencontrada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
