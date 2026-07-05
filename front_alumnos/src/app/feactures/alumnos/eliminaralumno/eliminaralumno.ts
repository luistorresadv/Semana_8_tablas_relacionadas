import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlumnoServices } from '../../../core/services/alumno.services';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ialumno } from '../../../core/interfaces/ialumno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminaralumno',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './eliminaralumno.html',
  styleUrl: './eliminaralumno.css',
})
export class Eliminaralumno implements OnInit {
  frmAlumno: FormGroup;
  IdAlumno!: number; 

  
  private readonly alumnoServicio = inject(AlumnoServices);
  private readonly ruta = inject(Router); 
  private readonly parametros = inject(ActivatedRoute);

  constructor() {
    
    this.frmAlumno = new FormGroup({
      cedula: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      telefono: new FormControl(''),
      carrera: new FormControl(''),
      nivel: new FormControl(''),
      fecha_nacimiento: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.parametros.paramMap.subscribe(params => {
    const id = params.get('id');
    this.IdAlumno = Number(id);
    
    console.log("ID del Alumno recibido para eliminar:", this.IdAlumno);

    if (this.IdAlumno && !isNaN(this.IdAlumno)) {
      this.cargaAlumno();
    } else {
      console.error("No se pudo obtener un ID válido de la URL");
      Swal.fire({
        title: "Error de Navegación",
        text: "No se especificó un ID de alumno válido.",
        icon: "error"
      });
      this.cancelar();
    }
  });
}

 cargaAlumno() {
  this.alumnoServicio.uno(this.IdAlumno).subscribe({ 
    next: (alumno: any) => { 
      console.log("Datos recibidos del backend para el formulario:", alumno);
      
      if (alumno) {
        
        this.frmAlumno.patchValue({
          cedula: alumno.cedula,
          nombre: alumno.nombre,
          apellido: alumno.apellido,
          correo: alumno.correo,
          telefono: alumno.telefono,
          carrera: alumno.carrera,
          nivel: alumno.nivel,
          fecha_nacimiento: alumno.fecha_nacimiento
        });
        
        
        this.frmAlumno.updateValueAndValidity();
      }
    },
    error: (error: any) => {
      console.error("Error al traer el alumno desde el servicio:", error);
      Swal.fire({
        title: "Error",
        text: "No se pudieron recuperar los datos del alumno del servidor.",
        icon: "error"
      });
    }
  });
}

  eliminar() {
    const nombreCompleto = `${this.frmAlumno.get('nombre')?.value} ${this.frmAlumno.get('apellido')?.value}`;

    Swal.fire({
      title: "¿Eliminar el alumno?",
      text: `¿Estás seguro de eliminar permanentemente a: ${nombreCompleto}?`, 
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33", 
      cancelButtonColor: "#3085d6", 
      confirmButtonText: "Sí, Eliminar Alumno",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.alumnoServicio.eliminar(this.IdAlumno).subscribe({
          next: (response) => { 
            console.log("Respuesta del servidor:", response);
            
            
            Swal.fire({
              title: "¡Eliminado!",
              text: "El alumno fue removido del sistema correctamente.",
              icon: "success"
            }).then(() => {
             
              this.ruta.navigate(['/alumnos']); 
            });
          },
          error: (error: any) => {
            console.error(error);
            Swal.fire({
              title: "Error en Servidor",
              text: "No se pudo eliminar el registro. Intente nuevamente.",
              icon: "error"
            });
          }
        });
      }
    });
  }

  cancelar() {
    this.ruta.navigate(['/alumnos']);
  }
}