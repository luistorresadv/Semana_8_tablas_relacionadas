import { Alumno } from './alumno.entity';
export declare class Matricula {
    id: number;
    periodo: string;
    fecha_matricula: Date;
    estado: string;
    alumno: Alumno;
}
