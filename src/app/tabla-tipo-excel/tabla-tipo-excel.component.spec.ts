import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTipoExcelComponent } from './tabla-tipo-excel.component';

describe('TablaTipoExcelComponent', () => {
  let component: TablaTipoExcelComponent;
  let fixture: ComponentFixture<TablaTipoExcelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTipoExcelComponent]
    });
    fixture = TestBed.createComponent(TablaTipoExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
