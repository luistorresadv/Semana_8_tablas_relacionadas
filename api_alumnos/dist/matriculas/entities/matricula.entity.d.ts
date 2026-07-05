import { Alumno } from '../../alumnos/entities/alumno.entity';
export declare class Matricula {
    id: number;
    periodo: string;
    fecha_matricula: Date;
    estado: string;
    alumnoId: number;
    alumno: Alumno;
}
