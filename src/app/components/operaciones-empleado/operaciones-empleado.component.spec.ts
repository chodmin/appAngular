import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesEmpleadoComponent } from './operaciones-empleado.component';

describe('OperacionesEmpleadoComponent', () => {
  let component: OperacionesEmpleadoComponent;
  let fixture: ComponentFixture<OperacionesEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperacionesEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacionesEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
