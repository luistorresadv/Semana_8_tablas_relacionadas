import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Router } from '@angular/router';
import { AlumnoServices } from '../../../core/services/alumno.services';

@Component({
  selector: 'app-editaralumno',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './editaralumno.html',
  styleUrl: './editaralumno.css',
})
export class Editaralumno implements OnInit {
  frmAlumno: FormGroup;
  idAlumno: number = 0; 

  private readonly fb = inject(FormBuilder);
  private readonly alumnoServicio = inject(AlumnoServices); 
  private readonly rutas = inject(Router);
  private readonly parametros = inject(ActivatedRoute);

  constructor() {
    this.frmAlumno = this.fb.group({  
      cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]),
      nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      apellido: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      correo: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]),
      telefono: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      carrera: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      nivel: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
      fecha_nacimiento: new FormControl('') ,
      activo: new FormControl(true)
    });
  }

  ngOnInit(): void {
  
    this.idAlumno = Number(this.parametros.snapshot.paramMap.get('id'));
    this.cargaAlumno();
  }

  cargaAlumno() {
    this.alumnoServicio.uno(this.idAlumno).subscribe({ 
      next: (alumno) => {
        this.frmAlumno.patchValue(alumno); 
      },
      error: (error) => {
        alert("No se encuentra al alumno");
        console.log(error);
      }
    });
  }

  grabar() {  
    if (this.frmAlumno.invalid) {
      alert("Por favor, llena todos los campos correctamente.");
      return;
    }

    const alu = this.frmAlumno.value;
    
    this.alumnoServicio.actualizar(this.idAlumno, alu).subscribe({
      next: (response) => {
        if (response) {
          alert("Se guardó correctamente");
          this.rutas.navigate(['/alumnos']); 
        }
      },
      error: (error) => {
        alert("No se guardó el alumno");
        console.log(error);
      }
    });
  }

  cancelar() {
    this.rutas.navigate(['/alumnos']);
  }
}