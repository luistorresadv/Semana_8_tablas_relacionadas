import { Repository } from 'typeorm';
import { Matricula } from "./entities/matricula.entity";
export declare class MatriculasService {
    private readonly matriculaRepository;
    constructor(matriculaRepository: Repository<Matricula>);
    todos(): Promise<Matricula[]>;
    uno(id: number): Promise<Matricula>;
    crear(datos: any): Promise<Matricula[]>;
    actualizar(id: number, datos: any): Promise<Matricula>;
    eliminar(id: number): Promise<{
        message: string;
    }>;
}
