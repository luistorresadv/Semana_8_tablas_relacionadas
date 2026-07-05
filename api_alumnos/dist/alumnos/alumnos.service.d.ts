import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
export declare class AlumnosService {
    private readonly alumnoRepository;
    constructor(alumnoRepository: Repository<Alumno>);
    create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    findAll(): Promise<Alumno[]>;
    findOne(id: number): Promise<Alumno>;
    update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno>;
    actualizar(id: number, datos: Partial<Alumno>): Promise<Alumno | null>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
