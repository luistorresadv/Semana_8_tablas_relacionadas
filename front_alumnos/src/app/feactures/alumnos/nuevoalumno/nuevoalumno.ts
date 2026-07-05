import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlumnoServices } from '../../../core/services/alumno.services';
import { Ialumno } from '../../../core/interfaces/ialumno';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nuevoalumno',
  imports: [CommonModule,ReactiveFormsModule,RouterLink,ReactiveFormsModule],
  templateUrl: './nuevoalumno.html',
  styleUrl: './nuevoalumno.css',
})
export class Nuevoalumno {
  frmAlumno:FormGroup;
  private readonly fb = inject(FormBuilder)
  private readonly alumnoServicio = inject(AlumnoServices)
  private readonly ruta = inject(Router)
  constructor(){
    this.frmAlumno = new FormGroup({
    cedula: new FormControl ('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
    nombre:new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    apellido:new FormControl ('' , [Validators.required, Validators.maxLength(50)]),
    correo: new FormControl ('',  [Validators.required, Validators.email, Validators.maxLength(100)]),
    telefono: new FormControl ('',  [Validators.required, Validators.maxLength(15)]),
    carrera: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
    nivel: new FormControl ('',  [Validators.required, Validators.min(1), Validators.max(10)]),
    fecha_nacimiento:new FormControl('') 
  });
  }
 

grabar() {
  if (this.frmAlumno.invalid) {
    alert("Por favor, llena todos los campos correctamente.");
    this.frmAlumno.markAllAsTouched();
    return;
  }

  // 1. Obtenemos los valores del formulario
  const formValue = this.frmAlumno.value;

  
  const alumno: Ialumno = {
    cedula: formValue.cedula,
    nombre: formValue.nombre,
    apellido: formValue.apellido,
    correo: formValue.correo || formValue.correo_electronico, 
    telefono: formValue.telefono || null,     
    carrera: formValue.carrera,
    nivel: Number(formValue.nivel),
    fecha_nacimiento: formValue.fecha_nacimiento || null,
    activo: true
  };

  console.log("Objeto estructurado para enviar al backend:", alumno);

  
  this.alumnoServicio.nuevo(alumno).subscribe({
    next: (alumno_nuevo) => {
      if (alumno_nuevo) {
        alert("¡Alumno registrado con éxito!");
        this.ruta.navigate(['/alumnos']);
      } else {
        alert("Error al guardar");
      }
    },
    error: (error) => {
      alert("Error en el servidor: " + (error.error?.message || error.message));
      console.error("Detalle completo del error:", error);
    }
  });
}


  cancelar() {
    this.ruta.navigate(['/']); // Te regresa a la tabla principal
  }
  
}
