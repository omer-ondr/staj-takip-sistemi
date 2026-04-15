import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasvuruForm } from './basvuru-form';

describe('BasvuruForm', () => {
  let component: BasvuruForm;
  let fixture: ComponentFixture<BasvuruForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasvuruForm],
    }).compileComponents();

    fixture = TestBed.createComponent(BasvuruForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
