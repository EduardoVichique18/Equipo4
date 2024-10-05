import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreraPage } from './carrera.page';

describe('CarreraPage', () => {
  let component: CarreraPage;
  let fixture: ComponentFixture<CarreraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
