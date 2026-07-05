import { Ialumno } from './ialumno';

export interface Imatricula {
  id?: number;
  periodo: string;
  fecha_matricula: Date | string;
  estado: string;
  alumno: Ialumno; 
}