import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultdataPage } from './resultdata.page';

describe('ResultdataPage', () => {
  let component: ResultdataPage;
  let fixture: ComponentFixture<ResultdataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
