import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatriculaServices } from '../../../core/services/matricula.services';
import { AlumnoServices } from '../../../core/services/alumno.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Ialumno } from '../../../core/interfaces/ialumno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarmatricula',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editarmatricula.html'
})
export class EditarmatriculaComponent implements OnInit {
  frmMatricula: FormGroup;
  IdMatricula!: number;
  listaAlumnos: Ialumno[] = [];

  private readonly matriculaServicio = inject(MatriculaServices);
  private readonly alumnoServicio = inject(AlumnoServices);
  private readonly ruta = inject(Router);
  private readonly parametros = inject(ActivatedRoute);

  constructor() {
    this.frmMatricula = new FormGroup({
      periodo: new FormControl('', [Validators.required]),
      fecha_matricula: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      alumnoId: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.IdMatricula = Number(this.parametros.snapshot.paramMap.get('id'));
    
    
    this.alumnoServicio.todos().subscribe({
      next: (res) => {
        this.listaAlumnos = res;
        this.cargarMatricula();
      }
    });
  }

  cargarMatricula() {
    this.matriculaServicio.uno(this.IdMatricula).subscribe({
      next: (matricula: any) => {
        this.frmMatricula.patchValue({
          periodo: matricula.periodo,
          fecha_matricula: matricula.fecha_matricula,
          estado: matricula.estado,
          alumnoId: matricula.alumno?.id 
        });
      },
      error: () => this.cancelar()
    });
  }

  guardar() {
  if (this.frmMatricula.invalid) return;

  const formValue = this.frmMatricula.value;
  
  const payload = {
    periodo: formValue.periodo,
    fecha_matricula: formValue.fecha_matricula,
    estado: formValue.estado,
    alumno: { id: Number(formValue.alumnoId) }
  };

  this.matriculaServicio.editar(this.IdMatricula, payload).subscribe({
    next: () => {
      Swal.fire("¡Actualizado!", "La matrícula fue modificada con éxito.", "success");
      this.cancelar(); 
    },
    error: (err) => {
      console.error("Detalle del error en el PUT:", err);
      Swal.fire("Error", "No se pudieron guardar los cambios en el servidor.", "error");
    }
  });
}

  cancelar() {
    this.ruta.navigate(['/matriculas']);
  }
}