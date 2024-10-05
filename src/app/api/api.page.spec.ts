import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapsPage } from './api.page';

describe('ApiPage', () => {
  let component: MapsPage;
  let fixture: ComponentFixture<MapsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
