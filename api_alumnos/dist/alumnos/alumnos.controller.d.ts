import { AlumnosService } from './alumnos.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';
export declare class AlumnosController {
    private readonly alumnosService;
    constructor(alumnosService: AlumnosService);
    create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    findAll(): Promise<Alumno[]>;
    findOne(id: string): Promise<Alumno>;
    update(id: string, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno>;
    actualizar(id: number, datosAlumno: Alumno): Promise<Alumno | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
