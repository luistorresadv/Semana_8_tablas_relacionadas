import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatriculaServices } from '../../../core/services/matricula.services';
import { AlumnoServices } from '../../../core/services/alumno.services';
import { Router } from '@angular/router';
import { Ialumno } from '../../../core/interfaces/ialumno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevamatricula',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevamatricula.html'
})
export class NuevamatriculaComponent implements OnInit {
  frmMatricula: FormGroup;
  listaAlumnos: Ialumno[] = [];

  private readonly matriculaServicio = inject(MatriculaServices);
  private readonly alumnoServicio = inject(AlumnoServices);
  private readonly ruta = inject(Router);

  constructor() {
    this.frmMatricula = new FormGroup({
      periodo: new FormControl('', [Validators.required]),
      fecha_matricula: new FormControl('', [Validators.required]),
      estado: new FormControl('Activa', [Validators.required]),
      alumnoId: new FormControl('', [Validators.required]) 
    });
  }

  ngOnInit(): void {
    this.alumnoServicio.todos().subscribe({
      next: (res) => this.listaAlumnos = res,
      error: (err) => console.error(err)
    });
  }

  grabar() {
    if (this.frmMatricula.invalid) {
      this.frmMatricula.markAllAsTouched();
      return;
    }

    const formValue = this.frmMatricula.value;

    
    const payload = {
      periodo: formValue.periodo,
      fecha_matricula: formValue.fecha_matricula,
      estado: formValue.estado,
      alumnoId: Number(formValue.alumnoId) 
    };

    this.matriculaServicio.nuevo(payload).subscribe({
      next: () => {
        Swal.fire("¡Éxito!", "Matrícula generada correctamente.", "success");
        this.ruta.navigate(['/matriculas']);
      },
      error: (err) => {
        console.error(err);
        Swal.fire("Error", "No se pudo guardar la matrícula.", "error");
      }
    });
  }
}