import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core'; // 👈 1. Añadimos ChangeDetectorRef aquí
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatriculaServices } from '../../core/services/matricula.services';
import { Imatricula } from '../../core/interfaces/imatricula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.css'
})
export class MatriculaComponent implements OnInit {
  listaMatriculas: Imatricula[] = [];

  private readonly matriculaServicio = inject(MatriculaServices);
  private readonly cdr = inject(ChangeDetectorRef); 

  ngOnInit(): void {
    this.cargarTodasLasMatriculas();
  }

  cargarTodasLasMatriculas() {
    this.matriculaServicio.todos().subscribe({
      next: (datos) => {
        this.listaMatriculas = datos;
        console.log("Matrículas cargadas exitosamente:", datos);
        
        
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error("Error al obtener matrículas:", err);
      }
    });
  }

  eliminarMatricula(id: number | undefined, periodo: string) {
    if (!id) return;

    Swal.fire({
      title: "¿Eliminar Matrícula?",
      text: `¿Estás seguro de eliminar la matrícula del periodo: ${periodo}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.matriculaServicio.eliminar(id).subscribe({
          next: () => {
            Swal.fire("¡Eliminada!", "La matrícula fue removida.", "success");
            this.cargarTodasLasMatriculas(); 
          }
        });
      }
    });
  }
}