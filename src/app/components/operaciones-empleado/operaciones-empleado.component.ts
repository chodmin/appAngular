import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-operaciones-empleado',
  templateUrl: './operaciones-empleado.component.html',
  styleUrls: ['./operaciones-empleado.component.css']
})
export class OperacionesEmpleadoComponent implements OnInit {
  empleados: any[] = []; 
  edades: any[] = [];
  operacion:number = 0;
    
  constructor(private _empleadoService: EmpleadoService) {
  }

  ngOnInit(): void {
    //this.getEmpleadosPromedio()
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
      this.empleados.forEach(empleado => {
        this.edades.push(Number(empleado.edad));
      });
      console.log(this.edades);
      
    // Javascript program to calculate the standered deviation of an array
  
    // Creating the mean with Array.reduce
    let mean = this.edades.reduce ((acc: any, curr: any)=>{ return acc + curr}, 0) / this.edades.length;

    console.log(mean);
    

    // Assigning (value - mean) ^ 2 to every array item
    this.edades = this.edades.map((k)=>{return (k - mean) ** 2 })
    
    // Calculating the sum of updated array
    let sum = this.edades.reduce((acc, curr)=> acc + curr, 0);
    
    // Calculating the variance
    let variance = sum / this.edades.length
    
    // Returning the Standered deviation
    this.operacion = Math.sqrt(sum / this.edades.length)
    
    console.log(this.operacion);

    return this.operacion;

    });
  }
}     
    



