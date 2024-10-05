import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosGeneralesPage } from './datos-generales.page';

describe('DatosGeneralesPage', () => {
  let component: DatosGeneralesPage;
  let fixture: ComponentFixture<DatosGeneralesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosGeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
