import { Routes } from '@angular/router';
import { AlumnoComponent } from './feactures/alumno.component/alumno.component';
import { Editaralumno } from './feactures/alumnos/editaralumno/editaralumno';
import { Nuevoalumno } from './feactures/alumnos/nuevoalumno/nuevoalumno'; 
import { Eliminaralumno } from './feactures/alumnos/eliminaralumno/eliminaralumno'; 
import { MatriculaComponent } from './feactures/matricula.component/matricula.component'; 
import { NuevamatriculaComponent } from './feactures/matriculas/nuevamatricula/nuevamatricula';
import { EditarmatriculaComponent } from './feactures/matriculas/editarmatricula/editarmatricula'; 


export const routes: Routes = [
  {
    path: '',
    component: AlumnoComponent,
    pathMatch:'full'
  },
  {
    path: 'alumnos',
    component: AlumnoComponent,
    pathMatch:'full'
  },

   {
    path: 'nuevoalumno',
    component: Nuevoalumno,
    pathMatch:'full'
  },
  {
    path: 'alumno/editar/:id',
    component: Editaralumno,
    pathMatch:'full'
  },
   {
    path: 'alumno/eliminar/:id',
    component: Eliminaralumno,
    pathMatch:'full'
  },

{ path: 'matriculas', component: MatriculaComponent },                       
  { path: 'matricula/nuevo', component: NuevamatriculaComponent },             
  { path: 'matricula/editar/:id', component: EditarmatriculaComponent },       
];