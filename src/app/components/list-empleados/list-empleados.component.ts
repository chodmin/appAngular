import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
  empleados: any[] = [];
  edadTemp: number = 0;
  edadProm: number = 0;
  
  constructor(private _empleadoService: EmpleadoService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.getEmpleados()
  }

  getEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element: any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    });
  }

  eliminarEmpleado(id: string) {
    this._empleadoService.eliminarEmpleado(id).then(() => {
      console.log('empelado eliminado con exito');
      this.toastr.error('El empleado fue eliminado con exito', 'Registro eliminado!', {
        positionClass: 'toast-bottom-right'
      });
    }).catch(error => {
      console.log(error);
    })
  }

  getEmpleadosPromedio() {
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element: any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
      
      this.empleados.forEach(empleado => {
        console.log(empleado.edad) ;
        this.edadTemp= Number(empleado.edad);
        this.edadProm = this.edadProm + this.edadTemp; 
        this.edadTemp = 0;
      });
      console.log("Suma");
      console.log(this.edadProm);
      this.edadProm = this.edadProm / this.empleados.length ;
      console.log("Promedio");
      console.log(this.edadProm);
    });
  }

}
